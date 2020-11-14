

var rem;

if(window.innerWidth < 1367 && window.innerWidth > 1280)
{
  rem = 12;
  console.log('12')
}

else if(window.innerWidth < 1680 && window.innerWidth > 1367)
{
  rem = 19;
  console.log('19')
}

else if(window.innerWidth < 1920 && window.innerWidth > 1600)
{
  rem = 23;
  console.log('23')
}

else if(window.innerWidth < 4000 && window.innerWidth > 1920)
{
  rem = 40;
  console.log('40')
}



else
{
  rem =  12;
  console.log('12')
}

console.log(window.innerWidth);

  // gsap.to(".main-logo", {
  //   scrollTrigger: {
  //       trigger : '#main-banner',
  //       scrub : 1,
  //       start : '+=600',
  //       end : "+=200"
  //   },
  //   opacity : 0,
  //   ease: "none"
    
  // })


  gsap.to(".mask-image", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=600',
        marker : true,
        end : "+=200"
    },
    opacity : 1,
    ease: "none"
    
  })




  // function areyaar(progress)
  // {
  //   if(progress > 0.94)
  //   {
  //     $('.mask-image').removeClass('mask-image-active');
  //     $('.mask-image').addClass('mask-background');
  //     $('.logo-animation-assests').addClass('logo-animation-complete');
  //   }

  //   else
  //   {
  //     $('.mask-image').addClass('mask-image-active');
  //     $('.mask-image').removeClass('mask-background');
  //     $('.logo-animation-assests').removeClass('logo-animation-complete');
  //   }
  // }

  gsap.to(".scroll-to-explore", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : 0.4,
        start : '+=0',
        end : '+=40'
    },
    opacity: '0'
  })

  gsap.to("footer", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : 0.4,
        start : '+=0',
        end : '+=40'
    },
    opacity: '1',
    bottom : '0%'
  })


  if(window.innerWidth > 1200)
  {
    gsap.to(".logo-animation-assests", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : 0.4,
          start : '+=0',
          end : "+=2500"
      },
      ease: Power0.easeNone,
      marginTop : 1000/100 * window.innerHeight , 
      marginLeft : 220/100 * window.innerWidth , 
      width : rem*2500
    })
  }


  if(window.innerWidth > 1366 && window.innerWidth < 1920)
    {
      gsap.to(".logo-animation-assests", {
        scrollTrigger: {
            trigger : '#main-banner',
            scrub : 0.4,
            start : '+=0',
            end : "+=2500"
        },
        marginTop : 1330/100 * window.innerHeight , 
        marginLeft : 350/100 * window.innerWidth , 
        width : rem*2600, 
        ease: Power0.easeNone
        
      })
    }

  if( window.innerWidth > 1920)
  {
    gsap.to(".logo-animation-assests", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : 0.4,
          start : '+=0',
          end : "+=2500"
      },
      marginTop : 1350/100 * window.innerHeight , 
      marginLeft : 400/100 * window.innerWidth , 
      width : rem*3000, 
      ease: Power0.easeNone
      
    })

    console.log('goforit')

   
  }




  if(window.innerWidth < 4000 && window.innerWidth > 2880)
  {
    gsap.to(".logo-animation-assests", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : 0.4,
          start : '+=0',
          end : "+=2500"
      },
      marginTop : 1500/100 * window.innerHeight , 
      marginLeft : 370/100 * window.innerWidth , 
      width : rem*3800, 
      ease: Power0.easeNone
      
    })

    console.log('getit')
  }


  gsap.to(".logo-animation-assests", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : 0.4,
        start : '+=2500',
        end : "+=200",
        onUpdate : self => completed(self.progress)
    },
    opacity : '0',
    ease: "none"
    
  })

  function completed(progress) {

    if(progress > 0.999)
    {
      $('.logo-animation-assests').addClass('logo-animation-fade');
    }
    else
    {
      $('.logo-animation-assests').removeClass('logo-animation-fade');
    }

  }





  // gsap.to(".logo-animation-assests", {
  //   scrollTrigger: {
  //       trigger : '#main-banner',
  //       scrub : true,
  //       start : '+=1400',
  //       end : "+=100"
  //   },

  //   opacity : 0, 
  //   ease: "none"
  
    
  // })


  gsap.to(".background-change", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=300',
        end : "+=10"
    },

    opacity : 1, 
    ease: "none"   
  })


  // gsap.to(".imagine-headline", {
  //   scrollTrigger: {
  //       trigger : '#main-banner',
  //       scrub : true,
  //       start : '+=300',
  //       end : "+=100"
  //   },

  //   opacity : 0.3, 
  //   ease: "none"   
  // })



  gsap.to(".imagine-headline", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : 0.3,
        start : '+=800',
        end : "+=1500"
    },

    fontSize : 5*rem, 
    opacity : 1,
    ease: "none"   
  })




  gsap.to(".imagine-para", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : 0.3,
        start : '+=2500',
        end : "+=500",
        onUpdate : self => completedFirstStep(self.progress)
    },

    opacity : 1, 
    ease: "none"   
  })

  gsap.to(".orange-gredient", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=300',
        end : "+=10"
    },
    opacity : 0, 
    ease: "none" 
  })



  gsap.to(".logo-animation-assests", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=0',
        pin: "#main-banner",
        end : "+=20000"
    },
    ease: "none",
    
  })

  // Complete First step scroll progess 3000
  
  function completedFirstStep(progress)
  {
    if(progress > 0.999)
    {
      $('.background-change').addClass('fade-background');
      WebsiteStage = 1;
    }
    else
    {
      $('.background-change').removeClass('fade-background');

      WebsiteStage = 0;
    }
  }


  var WebsiteStage = 0;

  $(window).on('scroll',function(){
    var activeBullet = $('.bullet-list-steps').children().eq(WebsiteStage);
    if(!activeBullet.hasClass('circle-active'))
    {
      $('.website-step').each(function(){
        if($(this).hasClass('circle-active'))
        {
          $(this).removeClass('circle-active');
        }
      })
  
      activeBullet.addClass('circle-active');
    }
    
  })


  
  gsap.to(".slide-2-text-para-1", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=3200',
        end : "+=1500"
    },
    y : -(60/100 * window.innerHeight),
    opacity : '0',
    ease: "none",
    
  })


  gsap.to(".slide-2-text-para-2", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=2500',
        end : "+=3000"
    },
    
    motionPath: {
      path: [
      { y : -(35/100 * window.innerHeight) , opacity : 1},
      { y : -(70/100 * window.innerHeight) , opacity : 0},
      
    ],
    curviness: 0
  },

    ease: "linear",
    
  })

  gsap.to(".slide-2-text-para-3", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=3700',
        end : "+=3000"
    },
    
    motionPath: {
      path: [
      { y : -(35/100 * window.innerHeight) , opacity : 1},
      { y : -(70/100 * window.innerHeight) , opacity : 0},
      
    ],
    curviness: 0
  },

    ease: "none",
    
  })

  gsap.to(".slide-2-text-para-4", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=4700',
        end : "+=3000"
    },
    
    motionPath: {
      path: [
      { y : -(35/100 * window.innerHeight) , opacity : 1},
      { y : -(70/100 * window.innerHeight) , opacity : 0},
      
    ],
    curviness: 0
  },

    ease: "none",
    
  })


  // gsap.to(".slide-2-text-para-3", {
  //   scrollTrigger: {
  //       trigger : '#main-banner',
  //       scrub : true,
  //       start : '+=4900',
  //       end : "+=1500"
  //   },
  //   transform : 'translate(-50%,-70%)',
  //   opacity : '1',
  //   ease: "none"
    
  // })

  // gsap.to(".slide-2-text-para-4", {
  //   scrollTrigger: {
  //       trigger : '#main-banner',
  //       scrub : true,
  //       start : '+=6600',
  //       end : "+=1500"
  //   },
  //   transform : 'translate(-50%,-50%)',
  //   opacity : '1',
  //   ease: "none"
    
  // })



  // bullet point switch

  $('.website-step').click(function(){

    var main_point = $(this).attr('id');

    good(main_point);
  })


  function good(SectionId) {
    var stephref = ['step-1','step-2','step-3','step-4','step-5','step-6','step-7','step-8','step-9','step-10',
    'step-11'];

    for(var i = 0; i <= 9; i++)
    {
  
       if(stephref[i] == SectionId)
       {
         var totalOffset;
   
         switch(i) {
           case 0:
            totalOffset = -500;
             break;
           case 1:
             totalOffset = 3400;
             break;         

           default:
             totalOffset = -500;
   
         }

         const tween = gsap.to(window, {duration: 2.5, scrollTo: {y: "#navbar", offsetY: -(totalOffset)}, });
         
   
       }
   
   
       
      
   
      // else
      // {
      //   console.log(window.innerHeight + " and " + window.innerWidth);
      //   if(stephref[i] == SectionId)
      //   {
      //     var totalOffset;
    
      //     switch(i) {
      //       case 0:
      //         totalOffset = -500;
      //         break;
      //       case 1:
      //         totalOffset = (window.innerHeight * 4 * i);
      //         break;         
 
      //       default:
      //         totalOffset = -500;
    
      //     }
 
      //     const tween = gsap.to(window, {duration: 2.5, scrollTo: {y: "#navbar", offsetY: -(totalOffset)}, });
          
    
      //   }
      // }
   
    }
  }


  $(window).resize(function(){location.reload();});



