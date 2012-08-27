$ = jQuery;

function randomFart() {
    var randomFart = Math.floor(Math.random() * 6 + 1);
    document.getElementById('frap' + randomFart).play();
}

function audioSetup() {
audioContent = '<audio id="frap1"><source src="sound/fart1.mp3" type="audio/mpeg" /></audio>';
audioContent += '<audio id="frap2"><source src="sound/fart2.wav" type="audio/mpeg" /></audio>';
audioContent += '<audio id="frap3"><source src="sound/fart3.mp3" type="audio/mpeg" /></audio>';
audioContent += '<audio id="frap4"><source src="sound/fart4.wav" type="audio/mpeg" /></audio>';
audioContent += '<audio id="frap5"><source src="sound/fart5.wav" type="audio/mpeg" /></audio>';
audioContent += '<audio id="frap6"><source src="sound/fart6.wav" type="audio/mpeg" /></audio>';
audioContent += '<audio id="womp"><source src="sound/sad.mp3" type="audio/mpeg" /></audio>';
$('.audio-drawer').html(audioContent);
}

audioSetup();

init = function(){

    
	
    structure = function(){
        // structure
        bodyContent = '<header id="top"><div class="nav-wrap"><a class="me" href="/">Eli Horne</a><nav class="main"><ul></ul></nav></div></header>';
        bodyContent += '<footer id="bottom"><div class="nav-wrap"><a class="me" href="/">Eli Horne</a><nav class="main"><ul></ul></nav></div></footer>';
        bodyContent += '<div class="content wrap"></div>';
        bodyContent += '<div class="audio-drawer"></div>';
        $('body').append(bodyContent);
        audioSetup();
		
        // data
        workContent = {
            "title": "For Hire",
            "work": [
                {
                "name": "Naked Ambition",
                "thumbURL": "/images/screens/naked-ambition-home.png",
                "description": "Official website for the major motion picture",
                "role": "UI design and development, promotional materials"
                },
                {
                "name": "Food Network",
                "thumbURL": "/images/screens/fn-drop-nav.png",
                "description": "Official website for the Food Network",
                "role": "UI development"
                },
                {
                "name": "HGTV",
                "thumbURL": "/images/screens/hgtv-drop-nav.png",
                "description": "Official website for HGTV",
                "role": "UI development"
                }
                
            ],
        }
        
        projectContent = {
            "title": "Side Projects",
            "work": [
                {
                "name": "Twistles",
                "thumbURL": "/images/screens/coming-soon.png",
                "role": "UI development",
                "description": "A Twitter collaboration with <a href=\"http://liztan.com\">Liz Tan</a>"
                },
                {
                "name": "Will Do",
                "thumbURL": "/images/screens/coming-soon.png",
                "role": "UI design and development",
                "description": "An AppEngine/Python experiment"
                }
               
            ]
        }
        
        mainContent = {
            "about": {
                "name": "About",
                "sectionClass": "about",
                "type": "content",
                "main": 'I live in Brooklyn and work as a <abbr title="User Experience">UX</abbr> designer.',
                "more": 'I currently work at <a href="http://google.com/jobs/">Google</a> on a variety of products. Previously I launched redesigns for the <a href="http://foodnetwork.com" class="foodnetwork">Food Network</a> and <a href="http://hgtv.com" class="hgtv">HGTV</a>.  Even before that I was a designer at <a href="http://playboy.com" class="playboy">Playboy</a>. I went to the parties, but I never got to meet Hef.'
            },
            
            /* "brickabrack": {
                "name": "Brick-a-brack",
                "sectionClass": "brickabrack",
                "type": "content",
                "main": "Here are some recent things I thought were cool",
                "more": "Uh oh, there was supposed to be something here, but I think Tumblr just shit the bed :("
            },
            
            "conspirators": {
                "name": "Conspirators",
                "sectionClass": "conspirators",
                "type": "content",
                "main": "I like these people/brands/things:",
                "item": [{
                    "type": "person",
                    "name": "Andrew David Watson",
                    "url": "http://www.andrewdavidwatson.com"
                },{
                    "type": "person",
                    "name": "Natasha Eng",
                    "url": "http://www.iamnatasha.com"
                },{
                    "type": "person",
                    "name": "Andy Bons",
                    "url": "http://www.andybons.com"
                },{
                    "type": "person",
                    "name": "Liz Tan",
                    "url": "http://www.liztan.com"
                },{
                    "type": "person",
                    "name": "Matt Kosoy",
                    "url": "http://www.mattkosoy.com"
                },{
                    "type": "person",
                    "name": "Sabah Ahmed",
                    "url": "http://www.sabahme.com"
                },{
                    "type": "person",
                    "name": "Michael Edgcumbe",
                    "url": "http://www.noisederived.com"
                },{
                    "type": "brand",
                    "name": "Techmeme",
                    "url": "http://www.techmeme.com"
                },{
                    "type": "brand",
                    "name": "Hacker News",
                    "url": "http://news.ycombinator.com"
                },{
                    "type": "brand",
                    "name": "Twitter",
                    "url": "http://www.twitter.com"
                },{
                    "type": "brand",
                    "name": "Apple",
                    "url": "http://www.apple.com"
                },{
                    "type": "brand",
                    "name": "Google",
                    "url": "http://www.google.com"
                },{
                    "type": "brand",
                    "name": "Rdio",
                    "url": "http://www.rdio.com"
                },{
                    "type": "thing",
                    "name": "Thing",
                    "url": "http://www.thing.com"
                },
                ]
            }, */
            
            "error": {
                "sectionClass": "error",
                "type": "error",
                "main": "Womp. I have no clue what you are looking for.",
                "more": 'Maybe try the <a href="http://google.com">googles</a>?'
            },
            
            "ie": {
                "sectionClass": "ie",
                "type": "error",
                "main": "Holy moly, you are using a shitty browser!",
                "more": 'I really only planned for people who know how to use their computers. Please <a href="http://chrome.google.com">install Chrome</a> and come back.'
            }       
        };
                
        greetingItems = {
            "item": [{
                "text": "Hi"
            }, {
				"text": "Hello"
            }, {
				"text": "Hola"
            }, {
				"text": "Howdy"
            }, {
				"text": "Greetings"
            }, {
				"text": "Hiya"
            }, {
				"text": "Yo"
            }, {
				"text": "Ahoy"
            }, {
				"text": "'Alo"
            }, {
				"text": "Hey"
            }]
        };
        
        $.each(mainContent, function(){
            if(this.type != 'error') {
                $('.nav-wrap .main ul').append('<li><a href="#" class="'+this.sectionClass+'">'+this.name+'</a>');
            };
            $('.content.wrap').append('<section id="'+this.sectionClass+'-content" class="pod"></section>');
            
        });
        
        aboutContent = '<h1><a href="/"><span class="holder"></span><span class="tail"/></a></h1>';
        aboutContent += '<h2>' + mainContent.about.main + '</h2>';
        aboutContent += '<p class="quick">' + mainContent.about.more + '</p>';
        aboutContent += '<div id="work-content" class="showcase">';
        aboutContent += '<h3><span class="square"/><span class="highlight">'+workContent.title+'</span></h3><ul></ul></div>';
        aboutContent += '<div id="project-content" class="showcase">';
        aboutContent += '<h3><span class="square"/><span class="highlight">'+projectContent.title+'</span></h3><ul></ul></div>';
        $('#about-content').html(aboutContent);
          
        
        if(mainContent.brickabrack != undefined) {
            brickabrackContent = '<h2>' + mainContent.brickabrack.main + '</h2>';
            $('#brickabrack-content').html(brickabrackContent);
        };
        
        if(mainContent.conspirators != undefined) {
            conspiratorsContent = '<h2>' + mainContent.conspirators.main + '</h2>';
            conspiratorsContent += '<ul></ul>';
            $('#conspirators-content').html(conspiratorsContent);
        };
        
        errorContent = '<h2>' + mainContent.error.main + '</h2>';
        errorContent += '<p>' + mainContent.error.more + '</p>';
        $('#error-content').html(errorContent);
        
        ieContent = '<h2>' + mainContent.ie.main + '</h2>';
        ieContent += '<p>' + mainContent.ie.more + '</p>';
        $('#ie-content').html(ieContent);
        
        if(mainContent.conspirators != undefined) {
            $.each(mainContent.conspirators.item, function(){
                $('#about-content h1 a').prepend('<span class="text">'+ this.text +'</span>');
            });
        };
        
       
        
        $.each(greetingItems.item, function(){
            $('#about-content h1 a').prepend('<span class="text">'+ this.text +'</span>');
        });
        
        if(mainContent.conspirators != undefined) {
            $.each(mainContent.conspirators.item, function(){
                $('#conspirators-content ul').append('<li><a class="'+this.type+'" href="'+this.url+'">'+this.name+'</a></li>');
            });
        };
        
        $.each(workContent.work, function(){
            sectionContent = '<li>';
            sectionContent += '<span class="title">'+this.name+'</span>';
            sectionContent += '<div class="thumb"><img src="'+this.thumbURL+'"/></div>';
            sectionContent += '<span class="description"><em>Description:</em> '+this.description+'</span>';
            sectionContent += '<span class="role"><em>Role:</em> '+this.role+'</span>';
            sectionContent += '</li>';
            $('#work-content ul').append(sectionContent);
        });
        
        $.each(projectContent.work, function(){
            sectionContent = '<li>';
            sectionContent += '<span class="title">'+this.name+'</span>';
            sectionContent += '<div class="thumb"><img src="'+this.thumbURL+'"/></div>';
            sectionContent += '<span class="description"><em>Description:</em> '+this.description+'</span>';
            sectionContent += '<span class="role"><em>Role:</em> '+this.role+'</span>';
            sectionContent += '</li>';
            
            $('#project-content ul').append(sectionContent);
        });
        
    };
    
    structure();
    
    stateChange = function(target) {
    
        speed = 500;
    
        if (target == 'default') {
            newColor = '#3cf';
            target = 'about';
        };
        
        if (target == 'about') {
            newColor = '#3cf'
        };
    
        if (target == 'brickabrack') {
            newColor = '#f0f'
        };
    
        if (target == 'conspirators') {
            newColor = '#12b29a'
        };
        
        if (target == 'error') {
            newColor = '#3cf';
        };
        
        if (target == 'ie') {
            newColor = '#3cf';
        };
    
        $('.main .active').remove();
        $('.main .' + target).append('<span class="active"/>');
        newTarget = '#' + target;
        //window.location.hash = newTarget;
        $('.main .active').animate({
            'bottom': '-5px'
        }, 100);
    
        $('.active-section').fadeOut('fast', function(){
            $(this).removeClass('active-section');
        })
    
        $('#' + target + '-content').fadeIn('fast', function(){
            $(this).addClass('active-section');
        });
    
            $('#top, #bottom').stop().animate({
            'background-color': newColor
        }, speed);
    
        $('body').removeClass().addClass('body-' + target);
    }
    
    goBrickabrack = function() {
        
        stateChange('brickabrack');
    
        if ($('#brickabrack-content ol > li').length) {} else {
            /*$.getJSON("http://elihorne.tumblr.com/api/read/json?callback=?", function(data) {
                $.each(data.posts, function(i, posts) {
                    var title = this["regular-title"];
                    var type = this.type;
                    var date = this.date;
                    var body = this["regular-body"];
                    var url = this["url-with-slug"];
    
                    $('#brickabrack-content ol').append('<li class="tumbled ' + type + '"><a class="title" href=' + url + '>' + title + '</a><p>' + body + '</p><span class="date">' + date + '</p></li>');
                    $('#brickabrack-content .error').hide();
                });
    
            }) */
            };
    
    }
    
    goConspirators = function() {
        stateChange('conspirators');
    }
    
    goAbout = function() {
        
        stateChange('about');
    
    }
    
    goError404 = function() {
        stateChange('error');
        $('.active-section').hide().removeClass('active-section');
        $('#error-content').addClass('active-section');
        $('#top .main ul').append('<li class="error"><a href="/">???</a></li>');
        $('.main .active').remove();
        $('.main .error').append('<span class="active"/>');
        document.getElementById('womp').play();
    }
    
    goEpic = function() {
        stateChange('about');
        document.getElementById('frap2').play();
    };
    
    goFail = function() {
        stateChange('ie');
        $('.active-section').hide().removeClass('active-section');
        $('#ie-content').addClass('active-section');
        $('#top .main ul').append('<li class="error"><a href="/">Fail</a></li>');
        $('.main .active').remove();
        $('.main .error').append('<span class="active"/>');
        document.getElementById('womp').play();
    }
    
    hashTarget = window.location.hash;
    if (window.location.hash.length) {
              if (hashTarget == '#brickabrack') {
    
            goBrickabrack();
    
        } else if (hashTarget == '#about') {
    
            goAbout();
        
        } else if (hashTarget == '#epic') {
    
            goEpic();
    
        } else if (hashTarget == '#ie') {
    
            goFail();
    
        } else if (hashTarget == '#conspirators') {
            goConspirators();
    
        } else {
            goError404();
    
        }
    
    } else {
        goAbout();
    };
    
    if(!jQuery.support.opacity) {
    	goFail();
    };
    
    $('.main .active').animate({
        'bottom': '-5px'
    }, 100);
    
    $('.main li a').live('click', function() {
        $('.main .error').fadeOut('slow', function() {
            $('.main .error').remove();
        });
    
        newTarget = $(this).attr('class');
        stateChange(newTarget);
    
        event.preventDefault();
    
    });
    
    $('#top').mouseenter(function() {
        navDown();
    
    })
    
    $('#top').mouseleave(function() {
        //countDown();
    });
    
    $('#top a').live('click', function() {
        targetClass = $(this).attr('class');
        
        if (targetClass == 'brickabrack') {
            goBrickabrack();
        }
    
        if (targetClass == 'about') {
            goAbout();
        }
        
    
        if (targetClass == 'conspirators') {
            goConspirators();
    
        }
    
    });


    $('#about-content h1 a').live('click', function() {
		randomFart();
        sayHello();
        event.preventDefault();
    });
        
    sayHello = function() {
        var randomHello = Math.floor(Math.random() * 10);
        var helloText = $('#about-content h1 .text:eq(' + randomHello + ')').text();
        $('#about-content .holder').text(helloText);    
    };
    
	sayHello();
	
	

}