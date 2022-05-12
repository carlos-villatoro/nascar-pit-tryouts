# NASCAR™ Pit Tryouts

## Lets get luggin ...


### You feel the roars of the engines. You smell the burning of the tires. Your andreline is kicking. You've been a NASCAR™ fan since you could sit in the stands and now you're in the pits. 

### Today you will be trying out to be a pit stop tire changer. You've been practicing the moves for weeks and today you will be picking up an impact gun and kicking some nuts loose!

### But if you can't beat the clock, you won't be suiting up for a raceday any time soon. Your job is to loosen every lug nut off the car's' wheel, pickup the the fallen lug nuts, zap them back onto the wheel ... __all before the clock reaches 0!__

## https://carlos-villatoro.github.io/nascar-pit-tryouts/

## Created using:
* HTML5
    * Canvas
* CSS 
* JavaScript

![WIREFRAME](./images/wireframe-1.jpeg)


## MVP


* Create a cursor controlled game
* Create a landing page with a start and restart button
* Create a canvas area to play the game in
* Change cursor within game area to impact gun
* Create mouse events for clicking and dragging lug nuts
* Start timer upon first mouse click
* Have lug nuts move when clicked and dragged
* Create a random field for after lug nuts have been removed to fall into
* Have hitboxes that lug nuts need to be dragged and held at
* Stop timer when all lug nuts are back on wheel
* Create a win event if timer is not 0:00, record time task was completed in
* Create a lose even if timer reaches 0:00 before player completes task
* Restart button should reset game, and save last fastest time


## Stretch Goals


* Have different difficulty levels, causing timer to be faster
* Have game be multi-player
    * Each persons time gets saved - if they beat the clock
    * Have leaderboard of times (including DNFs)
* Animate wheel to move out and into game area 1
* Add sound to the click and hold

## Forseeable Roadblacks

* Creating lug nut object hitboxes and wheel hitboxes for each lugnut
* Getting correct combination of mouse events 
* Having game stop and not be playable upon lose - timer runs out
* Having lug nuts not fall outside of the random field