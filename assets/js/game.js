$(function(){
    
    var game = {
        bananas: 0,
        bpc: 1,
        bps: 0
    }
    
    var achievements = {
        first: false
    }
    
    var upgrades = {
        
        fertilizer: {
            cost: 10,
            count: 0
        },
        
        enhancesoil: {
            cost: 250,
            count: 0
        },
        
        expandfarm: {
            cost: 1500,
            count: 0
        },
        
        shinytools: {
            cost: 100,
            count: 0
        },
        
        raise: {
            cost: 600,
            count: 0
        }
        
    }
    
    window.onload = function () {
    if (localStorage.getItem("hasLoadedBefore") === null) {

                $('#firstLoad').modal('show');
        
        localStorage.setItem("hasLoadedBefore", true);
    }
}
    
    
$( ".card" ).hover(
  function() {
    $(this).addClass('shadow').css('cursor', 'pointer'); 
  }, function() {
    $(this).removeClass('shadow');
  }
); 
    
    $('#save').click(function(){
        localStorage.setItem("game",JSON.stringify(game));
        localStorage.setItem("upgrades",JSON.stringify(upgrades));
    })
    
    $('#load').click(function(){
        var savegame = JSON.parse(localStorage.getItem("game"));
        var saveupgrades = JSON.parse(localStorage.getItem("upgrades"));

        if (typeof savegame.bananas !== "undefined") game.bananas = savegame.bananas;
        if (typeof savegame.bpc !== "undefined") game.bpc = savegame.bpc;
        if (typeof savegame.bps !== "undefined") game.bps= savegame.bps;
        
        if (typeof upgrades.fertilizer !== "undefined") upgrades.fertilizer = saveupgrades.fertilizer;
        if (typeof upgrades.enhancesoil !== "undefined") upgrades.enhancesoil = saveupgrades.enhancesoil;
        if (typeof upgrades.expandfarm !== "undefined") upgrades.expandfarm = saveupgrades.expandfarm;
        if (typeof upgrades.shinytools !== "undefined") upgrades.shinytools = saveupgrades.shinytools;
        if (typeof upgrades.raise !== "undefined") upgrades.raise = saveupgrades.raise;

        
        
        
        update()

    })
    
    function update() {
        
        $(document).attr("title", "Bananas: " + numberformat.format(game.bananas));
        
        $('#bananas').html(numberformat.format(game.bananas));
        $('#fert_cost').html(numberformat.format(upgrades.fertilizer.cost)); 
        $('#soil_cost').html(numberformat.format(upgrades.enhancesoil.cost)); 
        $('#expand_cost').html(numberformat.format(upgrades.expandfarm.cost));        
        $('#shiny_cost').html(numberformat.format(upgrades.shinytools.cost));
        $('#raise_cost').html(numberformat.format(upgrades.raise.cost));

        $('#1_count').html(upgrades.fertilizer.count)
        $('#2_count').html(upgrades.enhancesoil.count)
        $('#3_count').html(upgrades.expandfarm.count)

        $('#c1_count').html(upgrades.shinytools.count)
        $('#c2_count').html(upgrades.raise.count)

        
        $('#bpc').html(game.bpc);
        $('#bps').html(Math.round(10*game.bps)/10);
    }
    
    
    
    $('#click').mousedown(function(){
        game.bananas = game.bananas + game.bpc;
        update()
    })
    

    
    $('#fertilizer').click(function(){
        if(game.bananas >= upgrades.fertilizer.cost) {
            game.bananas = game.bananas - upgrades.fertilizer.cost;
            upgrades.fertilizer.count = upgrades.fertilizer.count + 1;
            game.bps = game.bps + .2
            //Calculate New Cost
            upgrades.fertilizer.cost = Math.ceil(upgrades.fertilizer.cost*1.2);
            update()
        }
    })
    
    $('#enhancesoil').click(function(){
        if(game.bananas >= upgrades.enhancesoil.cost) {
            game.bananas = game.bananas - upgrades.enhancesoil.cost;
            upgrades.enhancesoil.count = upgrades.enhancesoil.count + 1;
            game.bps = game.bps + 5            
            //Calculate New Cost
            upgrades.enhancesoil.cost =
            Math.ceil(upgrades.enhancesoil.cost*1.2)
            update()
        }
    })

    $('#expandfarm').click(function(){
        if(game.bananas >= upgrades.expandfarm.cost) {
            game.bananas = game.bananas - upgrades.expandfarm.cost;
            upgrades.expandfarm.count = upgrades.expandfarm.count + 1;
            game.bps = game.bps + 50            
            //Calculate New Cost
            upgrades.expandfarm.cost =
            Math.ceil(upgrades.expandfarm.cost*1.6)
            update()
        }
    })
    
    $('#shinytools').click(function(){
    if(game.bananas >= upgrades.shinytools.cost) {
        game.bananas = game.bananas - upgrades.shinytools.cost;
        upgrades.shinytools.count = upgrades.shinytools.count + 1;
        game.bpc = game.bpc + 1            
        //Calculate New Cost
        upgrades.shinytools.cost =
        Math.ceil(upgrades.shinytools.cost*1.2)
        update()
    }
    })
    
    $('#raise').click(function(){
    if(game.bananas >= upgrades.raise.cost) {
        game.bananas = game.bananas - upgrades.raise.cost;
        upgrades.raise.count = upgrades.raise.count + 1;
        game.bpc = game.bpc + 10            
        //Calculate New Cost
        upgrades.raise.cost =
        Math.ceil(upgrades.raise.cost*1.2)
        update()
    }
    })
    
    //Make the banana 'squish' on click
    
        $("#click").mousedown(function() {
      $("#click").css("width", "98%");
      return $("#click").css("top", "2%");
    });
    
    $("#click").mouseup(function() {
      $("#click").css("width", "100%");
      return $("#click").css("top", "0%");
    });
    
    //Toggle card color if affordable & make img non-drag
    
    setInterval(function(){
        $('img').attr('draggable', false)
       if(game.bananas >= upgrades.fertilizer.cost) {
           $('#1_card').addClass('bg-primary',500);
       } else {
           $('#1_card').removeClass('bg-primary',500);
       }
        
       if(game.bananas >= upgrades.enhancesoil.cost) {
           $('#2_card').addClass('bg-primary',500);
       } else {
           $('#2_card').removeClass('bg-primary',500);
       } 
        
       if(game.bananas >= upgrades.expandfarm.cost) {
           $('#3_card').addClass('bg-primary',500);
       } else {
           $('#3_card').removeClass('bg-primary',500);
       }  
        
        if(game.bananas >= upgrades.shinytools.cost) {
        $('#c1_card').addClass('bg-primary',500);
        } else {
        $('#c1_card').removeClass('bg-primary',500);
        } 
        
        if(game.bananas >= upgrades.raise.cost) {
        $('#c2_card').addClass('bg-primary',500);
        } else {
        $('#c2_card').removeClass('bg-primary',500);
        } 

    },1)
    
    // Plus thing
$(document).on('mousemove', function(e){
    $('#plus').css({
       left:  e.pageX,
       top:   e.pageY
    });
});
    
   /* window.setInterval(function(){
       if(game.bananas >= 100 && achievements.first === false) {
           $('#achievement').fadeIn();
           $('#ach_text').html("100 Bananas!");
           achievements.first = true;
       } 
    },1) */
    
    //Persecond shit
    
    window.setInterval(function () {
    // Fertilizer adds 1 per second (1/100 every 10ms)
    game.bananas += (upgrades.fertilizer.count * .2 / 100);
    update()
    // Soil Enhancements add 5 per second (5/100 every 10ms)
    game.bananas += (upgrades.enhancesoil.count * 5 / 100);
        
    // Farm Expansions add 50 per second (50/100 every 10ms)
    game.bananas += (upgrades.expandfarm.count * 50/100);        
}, 10);
})