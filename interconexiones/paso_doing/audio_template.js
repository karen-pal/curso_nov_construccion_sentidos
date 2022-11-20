class Audio {
    constructor({
        numBins = 4,
        cutoff = 2,
        smooth = 0.4,
        max = 15,
        scale = 10,
        isDrawing = false
    }) {
        this.vol = 0
        this.scale = scale
        this.max = max
        this.cutoff = cutoff
        this.smooth = smooth
        this.setBins(numBins)
        this.setChroma()

        // beat detection from: https://github.com/therewasaguy/p5-music-viz/blob/gh-pages/demos/01d_beat_detect_amplitude/sketch.js
        this.beat = {
            holdFrames: 20,
            threshold: 40,
            _cutoff: 0, // adaptive based on sound state
            decay: 0.98,
            _framesSinceBeat: 0 // keeps track of frames
        }

        this.onBeat = () => {
            //  console.log("beat")
        }

        this.canvas = document.createElement('canvas')
        this.canvas.width = 1000
        this.canvas.height = 1000
        this.canvas.style.width = "1000px"
        this.canvas.style.height = "1000px"
        document.body.appendChild(this.canvas)

        this.isDrawing = isDrawing
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = "#DFFFFF"
        this.ctx.strokeStyle = "#0ff"
        this.ctx.lineWidth = 0.5

        window.navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true
            })
            .then((stream) => {
                //  console.log('got mic stream', stream)
                this.stream = stream
                this.context = new AudioContext()
                //  this.context = new AudioContext()
                let audio_stream = this.context.createMediaStreamSource(stream)

                //  console.log(this.context)
                this.meyda = Meyda.createMeydaAnalyzer({
                    audioContext: this.context,
                    source: audio_stream,
                    featureExtractors: [
                        'loudness',
                        'chroma',
                        //'perceptualSpread',
                        //  'perceptualSharpness',
                        //  'spectralCentroid'
                    ]
                })
            })
            .catch((err) => console.log('ERROR', err))
    }

    detectBeat(level) {
        //console.log(level,   this.beat._cutoff)
        if (level > this.beat._cutoff && level > this.beat.threshold) {
            this.onBeat()
            this.beat._cutoff = level * 1.2
            this.beat._framesSinceBeat = 0
        } else {
            if (this.beat._framesSinceBeat <= this.beat.holdFrames) {
                this.beat._framesSinceBeat++;
            } else {
                this.beat._cutoff *= this.beat.decay
                this.beat._cutoff = Math.max(this.beat._cutoff, this.beat.threshold);
            }
        }
    }

    tick() {
        if (this.meyda) {
            var features = this.meyda.get()
            var chroma = features.chroma;
            if (features && features !== null) {
                this.chroma = chroma;
                this.vol = features.loudness.total
                this.detectBeat(this.vol)
                // reduce loudness array to number of bins
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                let spacing = Math.floor(features.loudness.specific.length / this.bins.length)
                this.prevBins = this.bins.slice(0)
                this.bins = this.bins.map((bin, index) => {
                    return features.loudness.specific.slice(index * spacing, (index + 1) * spacing).reduce(reducer)
                }).map((bin, index) => {
                    // map to specified range

                    // return (bin * (1.0 - this.smooth) + this.prevBins[index] * this.smooth)
                    return (bin * (1.0 - this.settings[index].smooth) + this.prevBins[index] * this.settings[index].smooth)
                })
                // var y = this.canvas.height - scale*this.settings[index].cutoff
                // this.ctx.beginPath()
                // this.ctx.moveTo(index*spacing, y)
                // this.ctx.lineTo((index+1)*spacing, y)
                // this.ctx.stroke()
                //
                // var yMax = this.canvas.height - scale*(this.settings[index].scale + this.settings[index].cutoff)
                this.fft = this.bins.map((bin, index) => (
                    // Math.max(0, (bin - this.cutoff) / (this.max - this.cutoff))
                    Math.max(0, (bin - this.settings[index].cutoff) / this.settings[index].scale)
                ))
                if (this.isDrawing) this.draw()
            }
        }
    }

    setCutoff(cutoff) {
        this.cutoff = cutoff
        this.settings = this.settings.map((el) => {
            el.cutoff = cutoff
            return el
        })
    }

    setSmooth(smooth) {
        this.smooth = smooth
        this.settings = this.settings.map((el) => {
            el.smooth = smooth
            return el
        })
    }
    setChroma() {
        this.chroma = Array(12).fill(0)
    }
    setBins(numBins) {
        this.bins = Array(numBins).fill(0)
        this.prevBins = Array(numBins).fill(0)
        this.fft = Array(numBins).fill(0)
        this.settings = Array(numBins).fill(0).map(() => ({
            cutoff: this.cutoff,
            scale: this.scale,
            smooth: this.smooth
        }))
        // to do: what to do in non-global mode?
        this.bins.forEach((bin, index) => {
            window['a' + index] = (scale = 1, offset = 0) => () => (a.fft[index] * scale + offset)
        })
        //  console.log(this.settings)
    }

    setScale(scale) {
        this.scale = scale
        this.settings = this.settings.map((el) => {
            el.scale = scale
            return el
        })
    }

    setMax(max) {
        this.max = max
        console.log('set max is deprecated')
    }
    hide() {
        this.isDrawing = false
        this.canvas.style.display = 'none'
    }

    show() {
        this.isDrawing = true
        this.canvas.style.display = 'block'

    }

    draw(variable, variable2) {
            //-------------------------------------------------dibuja aqui---------------------------------------------------------------//
            // para acceder a canvas usa this.canvas
            // para acceder al context usa this.ctx
            // tenès acceso al contenido de las bandas dentro del loop this.bins.forEach
            let i = 10;
            this.ctx.fillStyle = "rgba(10,10,20,.1)";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle= "rgba(100, 100, 155,.8)";
            this.bins.forEach((bin, index) => {
                variable *= bin //bin 0-1 que tanto hay
                this.ctx.beginPath();
                this.ctx.ellipse(this.canvas.width/2, this.canvas.height/2, variable2, variable, 0, 0, 2 * Math.PI);
                this.ctx.stroke();
                //console.log("starting with ", newValue);
            })
            i = i+10;

            //-------------------------------------------------dibuja aqui---------------------------------------------------------------//
            }
    }

