function rndgen(lower, upper, dp, step, fix) {
    //Produces random numbers between limits, with set number of decimal places and selectable steps. Also,
    //decimal places can be fixed.
    //upper = largest num
    //lower = smallest num
    //dp = number of decimal places
    //step = steps between smallest digits ie if 2 dp and want in 0.02 steps, then 0.02
    //fix = number of dp's fixed. -1 if no trailing zeros wanted
    step = step * Math.pow(10, dp);
    if(fix === -1) {
      do {
        var tmp =  (Math.floor(Math.random() * ((upper * Math.pow(10, dp) / step) - 
            (lower * Math.pow(10, dp) / step) + 1) + (lower * Math.pow(10, dp) / step)) / 
            Math.pow(10, dp) * step);
      } while((tmp * Math.pow(10, dp)) % step !== 0) //Solves occasional float point maths error
      return tmp;
    } else {
      return (Math.floor(Math.random() * (upper * Math.pow(10, dp) / step - 
            lower * Math.pow(10, dp) / step + 1) + lower * Math.pow(10, dp) / step) / 
            Math.pow(10, dp) * step).toFixed(fix);
    }
}

function gendefs() {
    //Turns all tiles back to front-up and
    //randomly selects which definitions are displayed in each of the 6 flipcards
    for(var i = 1; i < 7; i++) {
        var el = document.getElementById("c" + i);
        var st = window.getComputedStyle(el, null);
        var tr = st.getPropertyValue("transform");
        if(tr !== "none") {
            document.getElementById("c" + i).click(); 
        }
    }
    prevseldefs = seldefs;
    seldefs = [];
        for(var i = 0; i < 11; i += 2) {
            do {
                var j = rndgen(0, 164, 0, 2, -1)
            } while(seldefs.includes(j) || prevseldefs.includes(j))
            seldefs[i] = j;
            seldefs[i + 1] = j + 1;
        }
        setTimeout(function() {
            document.getElementById("c1f").innerHTML = "<b>" + defsarr[seldefs[0]] + "</b>";
            document.getElementById("c1b").innerHTML = "<b>" + defsarr[seldefs[0]] + "</b>" + defsarr[seldefs[1]];
            document.getElementById("c2f").innerHTML = "<b>" + defsarr[seldefs[2]] + "</b>";
            document.getElementById("c2b").innerHTML = "<b>" + defsarr[seldefs[2]] + "</b>" + defsarr[seldefs[3]];
            document.getElementById("c3f").innerHTML = "<b>" + defsarr[seldefs[4]] + "</b>";
            document.getElementById("c3b").innerHTML = "<b>" + defsarr[seldefs[4]] + "</b>" + defsarr[seldefs[5]];
            document.getElementById("c4f").innerHTML = "<b>" + defsarr[seldefs[6]] + "</b>";
            document.getElementById("c4b").innerHTML = "<b>" + defsarr[seldefs[6]] + "</b>" + defsarr[seldefs[7]];
            document.getElementById("c5f").innerHTML = "<b>" + defsarr[seldefs[8]] + "</b>";
            document.getElementById("c5b").innerHTML = "<b>" + defsarr[seldefs[8]] + "</b>" + defsarr[seldefs[9]];
            document.getElementById("c6f").innerHTML = "<b>" + defsarr[seldefs[10]] + "</b>";
            document.getElementById("c6b").innerHTML = "<b>" + defsarr[seldefs[10]] + "</b>" + defsarr[seldefs[11]]
            }, 100);
    }