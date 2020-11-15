


$(window).bind('load',function(){

  $(".loader-overlay").css({
    "display" : "none"
})
});

  console.log(window.innerWidth + "  and  " + window.innerHeight);

  var main_height  = window.innerHeight;
  var main_width = window.innerWidth;

  var logoWidth = $('.logo-animation-assests').width();
  var logoHeight = $('.logo-animation-assests').height();

  console.log("dfds" + logoWidth + ' ' + logoHeight)

  $('.logo-animation-assests').css({
    top : (main_height * 50/100 - logoHeight/2),
    left : (main_width * 50/100 - logoWidth/2)
  })

var rem;

if(window.innerWidth < 1367 && window.innerWidth > 1280)
{
  rem = 14;
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


  // if(window.innerWidth > 767 && window.innerWidth < 1200)
  // {
    
  //   gsap.to(".logo-animation-assests", {
  //     scrollTrigger: {
  //         trigger : '#main-banner',
  //         scrub : 0.4,
  //         start : '+=0',
  //         end : "+=2500"
  //     },
  //     ease: Power0.easeNone,
  //     marginTop : 800/100 * window.innerHeight , 
  //     marginLeft : 300/100 * window.innerWidth , 
  //     width : rem*2500
  //   })
  // }


 
    var main_width = rem*2500;
    gsap.to(".logo-animation-assests", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : 0.4,
          start : '+=0',
          end : "+=2500"
      },
      ease: Power0.easeNone,
      width : main_width,
      marginLeft : -(main_width * 39/100),
      marginTop : -(main_width * 26/100),
    })

    console.log('aridada')
  


  // if(window.innerWidth > 1366 && window.innerWidth < 1919)
  //   {
  //     gsap.to(".logo-animation-assests", {
  //       scrollTrigger: {
  //           trigger : '#main-banner',
  //           scrub : 0.4,
  //           start : '+=0',
  //           end : "+=2500"
  //       },
  //       marginTop : 1330/100 * window.innerHeight , 
  //       marginLeft : 350/100 * window.innerWidth , 
  //       width : rem*2600, 
  //       ease: Power0.easeNone
        
  //     })
  //   }


  //   if( window.innerWidth > 1919 && window.innerWidth < 2400)
  //   {
  //     gsap.to(".logo-animation-assests", {
  //       scrollTrigger: {
  //           trigger : '#main-banner',
  //           scrub : 0.4,
  //           start : '+=0',
  //           end : "+=2500"
  //       },
  //       marginTop : 1000/100 * window.innerHeight , 
  //       marginLeft : 270/100 * window.innerWidth , 
  //       width : rem*4000, 
  //       ease: Power0.easeNone
        
  //     })
  
  //     console.log('goforitnowagin')
  
     
  //   }

  // if( window.innerWidth > 2400)
  // {
  //   gsap.to(".logo-animation-assests", {
  //     scrollTrigger: {
  //         trigger : '#main-banner',
  //         scrub : 0.4,
  //         start : '+=0',
  //         end : "+=2500"
  //     },
  //     marginTop : 1350/100 * window.innerHeight , 
  //     marginLeft : 400/100 * window.innerWidth , 
  //     width : rem*3000, 
  //     ease: Power0.easeNone
      
  //   })

  //   console.log('goforit')

   
  // }

  

  // // Ok, I will see what might works best. are you hurry on this? this might fix quickly maybe be 1-2 days or takes 1 week depending upon how much need to change. although I have noticed that website take 


  // if(window.innerWidth < 4000 && window.innerWidth > 2880)
  // {
  //   gsap.to(".logo-animation-assests", {
  //     scrollTrigger: {
  //         trigger : '#main-banner',
  //         scrub : 0.4,
  //         start : '+=0',
  //         end : "+=2500"
  //     },
  //     marginTop : 1500/100 * window.innerHeight , 
  //     marginLeft : 370/100 * window.innerWidth , 
  //     width : rem*3800, 
  //     ease: Power0.easeNone
      
  //   })

  //   console.log('getit')
  // }


  // gsap.to(".logo-animation-assests", {
  //   scrollTrigger: {
  //       trigger : '#main-banner',
  //       scrub : 0.4,
  //       start : '+=2500',
  //       end : "+=200",
  //       onUpdate : self => completed(self.progress)
  //   },
  //   opacity : '0',
  //   ease: "none"
    
  // })

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



$('.menu-bar-toggle').on('click',function(){
  $('.nav-link-container').toggleClass('nav-link-active');

  $('#sideProgress').toggleClass('sideProgress-not-active');
})

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
        end : "+=9000"
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
             
          case 2:
          totalOffset = 9000;
          break; 

          case 3:
          totalOffset = 12000;
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

 // slide 3

  gsap.from(".slide-img-3", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=7400',
        end : "+=1000",
        onUpdate : self => completedSecondStep(self.progress)
    },
    
  transform : 'translateX(-100%)',
    ease: "none",
    
  })


  if(window.innerWidth < window.innerHeight)
  {
    gsap.from(".slide-text-3", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : true,
          start : '+=7400',
          end : "+=1000"
      },
      
    transform : 'translateY(-800%)',
      ease: "none",
      
    })

    gsap.from(".slide-text-3 .line-white", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : true,
          start : '+=7400',
          end : "+=1000"
      },
      
    transform : 'translateY(1600%)',
      ease: "none",
      
    })
  }

  else if(window.innerWidth < window.innerHeight * 1.4)
  {
    gsap.from(".slide-text-3", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : true,
          start : '+=7400',
          end : "+=1000"
      },
      
    transform : 'translateY(-600%)',
      ease: "none",
      
    })

    gsap.from(".slide-text-3 .line-white", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : true,
          start : '+=7400',
          end : "+=1000"
      },
      
    transform : 'translateY(800%)',
      ease: "none",
      
    })
  }

  else
  {
    gsap.from(".slide-text-3", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : true,
          start : '+=7400',
          end : "+=1000"
      },
      
    transform : 'translateY(-400%)',
      ease: "none",
      
    })

    gsap.from(".slide-text-3 .line-white", {
      scrollTrigger: {
          trigger : '#main-banner',
          scrub : true,
          start : '+=7400',
          end : "+=1000"
      },
      
    transform : 'translateY(800%)',
      ease: "none",
      
    })
  }

  

  


  gsap.from(".slide-text-3 h2", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=8200',
        end : "+=500"
    },
    
  opacity : '0',
    ease: "none",
    
  })


  gsap.to(".slide-img-3", {
    scrollTrigger: {
        trigger : '#main-banner',
        scrub : true,
        start : '+=9000',
        end : "+=1000"
    },
    
  marginTop : '30%',
    ease: "none",
    
  })


  function completedSecondStep(progress)
  {
    if(progress > 0.999)
    {
      WebsiteStage = 2;
    }
    else
    {
      WebsiteStage = 1;
    }
  }

  gsap.to("#Physical", {
    scrollTrigger: {
        trigger : '#Physical',
        scrub : true,
        start : '+=0',
        pin: "#Physical",
        end : "+=3000",
        onUpdate: self => aredekho(self.progress)
    },
    ease: "none",
    
  })

    
  gsap.from("#canvas_id", {
    scrollTrigger: {
      trigger : '#Physical',
      scrub : true,
      start : '+=0',
      // snap: {
      //   snapTo: 1/8,
      //   duration: { min: 0.1, max: 0.3 },
      //   anticipatePin: 0.3,
      //   delay: 0
      // },
      marker : true,
      end : "+=500",
      onUpdate : self => completedThirdStep(self.progress)
    },
    transform : 'translateX(-80%)',
    ease: "none"
    
    
    })


     
  function completedThirdStep(progress)
  {
    if(progress > 0.999)
    {
      WebsiteStage = 3;
    }
    else
    {
      WebsiteStage = 2;
    }
  }

  // canvas animation

  var canvas = document.getElementById("canvas_id");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var numberOfSides = 6;

class Circle {
    constructor (radius,stroke,width) {

		this.radius = radius;
		this.stroke = stroke;
		this.width = width;
	}
	

		draw(){
		let x = window.innerWidth/2;
		let y = window.innerHeight/2;
		var angle = 2*Math.PI/numberOfSides;
 		ctx.beginPath();
		if(this.radius == 50)
		{
			ctx.translate(x, y);

		}
		ctx.moveTo(this.radius, 0);          
 		for (var i=1; i<=numberOfSides; i++) {
			 ctx.lineTo(this.radius*Math.cos(i * angle), this.radius*Math.sin(i * angle));
		}
		ctx.closePath();
		ctx.stroke();
		ctx.strokeStyle = this.stroke;
		ctx.lineWidth = this.width;
		}

	  
	}

	let circle = [];

	let base_element = 50;


if(window.innerHeight > window.innerWidth)
{ 
  gsap.from("#canvas_id", {
    scrollTrigger: {
      trigger : '#Physical',
      scrub : true,
      start : '-=500',
      // snap: {
      //   snapTo: 1/8,
      //   duration: { min: 0.1, max: 0.3 },
      //   anticipatePin: 0.3,
      //   delay: 0
      // },
      marker : true,
      end : "+=600"
    },
    transform : 'translateX(-200%)',
    ease: "none"
    
    })

}

else if(window.innerHeight < window.innerWidth)
{
  gsap.from("#canvas_id", {
    scrollTrigger: {
      trigger : '#Physical',
      scrub : true,
      start : '+=0',
      // snap: {
      //   snapTo: 1/8,
      //   duration: { min: 0.1, max: 0.3 },
      //   anticipatePin: 0.3,
      //   delay: 0
      // },
      marker : true,
      end : "+=300"
    },
    transform : 'translateX(-35%)',
    ease: "none"
    
    })
}
		  
      

      gsap.from(".text-viewport-center", {
        scrollTrigger: {
          trigger : '#Physical',
          scrub : true,
          start : '+=0',
          // snap: {
          //   snapTo: 1/8,
          //   duration: { min: 0.1, max: 0.3 },
          //   anticipatePin: 0.3,
          //   delay: 0
          // },
          marker : true,
          end : "+=300"
        },
        transform : 'translateY(150%)',
        ease: "none"
        
        
        })

		  


	// setInterval(function(){
		

	// 	if(base_element < 1000)
	// 	{
	// 		base_element +=10;
	// 	let newCircle = new Circle(base_element);
	// 	newCircle.draw();
			
	// 	}

	// 	else
	// 	{
	// 		return false
	// 	}
	// },50)

	// circle.push(new Circle(100));
	// circle.push(new Circle(110));
	// circle[0].draw();
  // circle[1].draw();
  
  if(window.innerWidth < 2200)
  {
    for(var i = 50; i <= 2000; i+=20)
		{
			let newCircle = new Circle(i,"transparent",2);
			circle.push(newCircle);
		}
  }

  else
  {
    for(var i = 50; i <= 4000; i+=40)
		{
			let newCircle = new Circle(i,"transparent",2);
			circle.push(newCircle);
		}
  }

	


		console.log(circle)


		let previous;
		function aredekho(e){

			if(e == 9.99999000001e-7)
			{
				return false;
			}
			else if(e >= 0)
			{
				if(previous)
				{
					if(e > previous)
					{
						let index = Math.round(e*95);
						for(let i = 0; i <= index; i++)
						{
							if(i == index)
							{
								circle[i].stroke = '#FEA500'
								circle[i].width = 5;
							}

							else{
								circle[i].stroke = 'rgba(255,255,255,0.25)'
								circle[i].width = 1;
							}
							
						}
					}

					else if(e < previous)
					{
						let index = Math.round(e*95);

						console.log(e)

						for(let i = 95; i >= index; i--)
						{
							if(i == index)
							{
								circle[i].stroke = '#FEA500'
								circle[i].width = 5;
							}

							else
							{
								circle[i].stroke = 'transparent'
								circle[i].width = 1;
							}
						}
					}
					

				}
				previous = e;
			}
			
		}



		animate = () => {

		
			ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
			let x = window.innerWidth/2;
			let y = window.innerHeight/2;
			window.requestAnimationFrame(animate);
		
			for(var i = 0; i <= 95; i++)
			{
				
				circle[i].draw();
		
			}
	
			ctx.translate(-x, -y);
			
		
		}
	animate()




  // $(window).resize(function(){location.reload();});



