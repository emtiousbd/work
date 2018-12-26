jQuery(document).ready(function(){
   
    jQuery(".nav-item a").css("background","#ffd27f");
    
    jQuery("#about-garden").hide();
    
   //**********
    jQuery("#details").click(function(){
        
        jQuery("#about-garden").show()
         jQuery("#details").hide()
    })
    
    
    //********
    
        jQuery(".view-details3").click(function(){   
        jQuery(".c3").slideToggle(2000);
        console.log("event occured");
    });
    
    jQuery(".view-details2").click(function(){   
        jQuery(".c2").slideToggle(2000);
        console.log("event occured");
    });
    
        jQuery(".view-details1").click(function(){   
        jQuery(".c1").slideToggle(2000);
        console.log("event occured");
    });
    
    //************
    
    jQuery(".order").click(function(){
 jQuery("#exampleInputTreeName").attr('placeholder','Enter Tree Name')

 jQuery("#exampleInputAmount").attr('placeholder','Enter Amount')
        
 jQuery("#exampleInputAmount").attr('placeholder','Enter Amount')
        
 jQuery("#exampleInputName").attr('placeholder','Enter YOur Name')  

 jQuery("#exampleInputMobile").attr('placeholder','Enter YOur Mobile No.')        
        
        
    })
    
    //***********
    
    jQuery(".copy-right").css("color","green")
    
    //***********
    
    jQuery(".discount-lable").text(" Get 25% dicount for your first order!")
    
    
    
    
})