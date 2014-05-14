var interval = 350;
var score = 0;
var maxTargets = 10;

$(function() 
{
		setInterval(function()
		{
			var targets = $('.target[status=alive]');
			if (targets.length>=maxTargets)
			{
			$('.panel').remove();
			$('.score-box').text('Game Over.'+ 'SCORE:'+score);
			
			$('.score-box').addClass('finished');
			clearInterval(timer);
			return;
			}
			var target = $('<div class="target" status="alive"><div class="target1"></div><div class="target2"></div><div class="target3"></div><div class="target4"></div></div>');
			$('.panel').append(target);
			
			var panelWidth =  $('.panel').width();
			var panelHeight =  $('.panel').height();
			var targetWidth = $('.target').width();
			var targetHeight = $('.target').height();
			
			target.css
			({
				left:(panelWidth-targetWidth)*Math.random()+'px',
				top: (panelHeight-targetHeight)*Math.random()+'px'
			})
		},interval);
		
		$('.panel').on('mousedown','.target[status=alive]',
			function(event)
			{
				var target = $(event.currentTarget);
				target.attr('status','broken1');
				setTimeout(function()
				{
					target.remove();
				},800);
				++score;
				$('.score').text(score);
			}
		);
});