//Begin the animation when the page loads
$(document).ready(function(){
    animateDiv();
	
	$('#ball1').click(function(){
		$('#search').val("Football");	
	});
	
});

//Set the position of the image
function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

//Move the image around the page
function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#ball1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#ball1').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

//Adjust the speed of the image
function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}		
