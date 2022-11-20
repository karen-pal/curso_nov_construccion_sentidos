

# osc(30,0.01,1).out()

Main -> gen out | gen mod_simple out | gen mod out | gen mod_simple mod out | gen mod mod_simple out
#Main -> gen mod_chain out
mod_chain -> mod mod_simple | mod_chain
gen -> osc | shape | o0
mod_simple -> scale | rotate | kaleid
mod -> modulate | diff | layer 

# generators
o0 -> "src(o0)"
osc -> "osc(" float_param "," float_param "," float_param ")"
shape -> "shape(" float_param "," float_param "," float_param ")"
# mod simples
kaleid -> ".kaleid(" float_param ")" | ".kaleid(" time_variable ")"
rotate -> ".rotate(" float_param ")" | ".rotate(" time_variable ")"
luma -> ".luma(" float_param ")"
scale -> ".scale(" float_param ")" | ".scale(" time_variable ")" 


# mods que toman gen
modulate -> ".modulate(" gen "," float_param ")" | ".modulate(" gen "," time_variable ")"
diff -> ".diff(" gen ")"
layer -> ".layer(" gen luma ")" 

out -> ".out()"



time_variable -> "()=>Math.sin(time)" | "()=>Math.sin(time*" float ")"

float_param -> float

float ->
      small "." int  
    | int        
	
small ->[0-1]:+ 
int -> [0-9]:+  


# intentando recursividad


# osc(30,0.01,1).out()

#Main -> gen out | gen mod_simple out | gen mod out | gen mod_simple mod out | gen mod_chain out
Main -> gen mod_chain out
mod_chain -> mod mod_simple | mod_chain
gen -> osc | shape | o0
mod_simple -> scale | rotate | kaleid
mod -> modulate | diff | layer 
o0 -> "src(o0)"
osc -> "osc(" float_param "," float_param "," float_param ")"
shape -> "shape(" float_param "," float_param "," float_param ")"
kaleid -> ".kaleid(" float_param ")" | ".kaleid(" time_variable ")"
rotate -> ".rotate(" float_param ")" | ".rotate(" time_variable ")"
luma -> ".luma(" float_param ")"
modulate -> ".modulate(" gen "," float_param ")" | ".modulate(" gen "," time_variable ")"
diff -> ".diff(" gen ")"
layer -> ".layer(" gen luma ")" 

scale -> ".scale(" float_param ")" | ".scale(" time_variable ")" 
out -> ".out()"



time_variable -> "()=>Math.sin(time)" | "()=>Math.sin(time*" float ")"

float_param -> float

float ->
      small "." int  
    | int        
	
small ->[0-1]:+ 
int -> [0-9]:+  

#

# osc(30,0.01,1).out()

Main -> gen out | gen mod_simple out | gen mod out | gen mod_simple mod out | gen mod mod_simple out
gen -> osc | shape
mod_simple -> scale | rotate
mod -> modulate
osc -> "osc(" float_param "," float_param "," float_param ")"
shape -> "shape(" float_param "," float_param "," float_param ")"
rotate -> ".rotate(" float_param ")"
modulate -> ".modulate(" gen "," float_param ")"

scale -> ".scale(" float_param ")"
out -> ".out()"





float_param -> float

float ->
      small "." int  
    | int        
	
small ->[0-1]:+ 
int -> [0-9]:+  
