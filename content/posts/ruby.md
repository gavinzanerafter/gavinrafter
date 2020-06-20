---
title: Making a text-based adventure game
date: '2020-03-10'
published: true
layout: post
tags: ['ruby', 'adventure', 'game']
category: example
summary: In this post I will show you how to make a ruby project that sends you on an adventure.
---

In this post I will show you how to make a ruby project that sends you on an adventure.

##Getting Started

Go to a coding platform (_I will use atom_). Make a new folder and call it **`adventure.rb`**. Let's start off with a variable. Enter this into the code

```ruby
places = [
  "airport",
  "train station",
  "hedge maze",
  "road"
]
```

So this is cool but we never use it anywhere. Add this to the code

```ruby
puts "You are going to the " + places.sample + "."
```

Here we are `putting` a sample/random item from the array we made, but what if we wanted to use the place we are at in the story line? Add this before the `puts`:

```ruby
place = places.sample
```

Then replace:

```ruby
puts "You are going to the " + places.sample + "."
```

With:

```ruby
puts "You are going to the " + place + "."
```

And now we can know which `place` we go to. Now we can do this:

```ruby
puts "On the way to the " + place + ", you see a chicken."
```

With this these will `put` at around the same time. To fix this, between:

```ruby
puts "You are going to the " + place + "."
```

And:

```ruby
puts "On the way to the " + place + ", you see a chicken."
```

Add:

```ruby
sleep(1)
```

Let's test these out. Go to terminal

```js
cd ~/  //plus the folder adventure.rb is in
```

Then to run it

```js
ruby adventure.rb
```

You should see:

```js
You go to the {insert place here}.
On the way to the {insert place here}, you see a chicken.
```

Obviously the `{insert place here}` would be: hedge maze, airport, train station or road.

##Animals

So on the way to an airport you would probably not see a _chicken_. So lets make some variables up at the top:

```ruby
airport = {

}

train_station = {

}

hedge_maze = {

}

road = {

}
```

Add some content:

```ruby
airport = {
  animal: "a stray dog",
  name: "airport"
}

train_station = {
  animal: "a bird",
  name: "train station"
}

hedge_maze = {
  animal: "a cow",
  name: "hedge maze"
}

road = {
  animal: "a squirrel",
  name: "road"
}
```

Now how would we find the animal based on the place... Functions! Let's make a findAnimal function:

```ruby
def find_animal(place, airport, train_station, hedge_maze, road)
  if place == "airport"
    airport[:animal]
  elsif place == "train station"
    train_station[:animal]
  elsif place == "hedge maze"
    hedge_maze[:animal]
  elsif place == "road"
    road[:animal]
  end
end
```

So this checks what `place` is and returns the correct animal. Now let's replace

```ruby
puts "On the way to the " + place + " you see a chicken."
```

With:

```ruby
puts "On the way to the " + place + " you see " + find_animal(place, airport, train_station, hedge_maze, road) + "."
```

##Checking your code.

We have gotten the start of the adventure made. Let's make sure we did it right. Is this your code:

```ruby
places = [
  "airport",
  "train station",
  "hedge maze",
  "road"
]

airport = {
  animal: "a stray dog",
  name: "airport"
}

train_station = {
  animal: "a bird",
  name: "train station"
}

hedge_maze = {
  animal: "a cow",
  name: "hedge maze"
}

road = {
  animal: "a squirrel",
  name: "road"
}

def find_animal(place, airport, train_station, hedge_maze, road)
  if place == "airport"
    airport[:animal]
  elsif place == "train station"
    train_station[:animal]
  elsif place == "hedge maze"
    hedge_maze[:animal]
  elsif place == "road"
    road[:animal]
  end
end

place = places.sample

puts "You are going to the " + place + "."
sleep(1)
puts "On the way to the " + place + " you see " + find_animal(place, airport, train_station, hedge_maze, road) + "."
```

If not then you can just copy and paste by highlighting the text and pressing `⌘`(_command_) and `C` then going to your code and pressing `⌘ and A` then `⌘ and V`.

##Making Agents

So let's add some pizazz to our game. Add this to the end of the code:

```ruby
sleep(1)
puts "You feel that this " + animal + " is calling for you."
```

But `animal` doesn't exist. Let's do that now before our `puts`:

```ruby
animal = find_animal(place, airport, train_station, hedge_maze, road)
```

With that we can replace our

```ruby
puts "On the way to the " + place + " you see " + find_animal(place, airport, train_station, hedge_maze, road) + "."
```

with our new variable:

```ruby
puts "On the way to the " + place + " you see a " + animal + "."
```

So our game is coming along. Let's add some more:

```ruby
sleep(1)
puts "Then you see the " + animal + " has a hat."
```

What a twist! :)

##UI components

Here let's make it so the person can choose what they want to do:

```ruby
sleep(1)
puts "Do you go to the " + animal + " or do you still go to the " + place + "? 1 for go to " + animal + ". 2 for go to " + place + ". Answer with terminal."
what = gets.chomp
```

So `what` is the answer that they say in the terminal. Let's test this out in terminal:

```js
ruby adventure.rb
```

You should see:

```js
You are going to the road.
On the way to the road, you see a squirrel.
You feel that this squirrel is calling for you.
Then you see the squirrel has a hat.
Do you go to the squirrel or do you still go to the road? 1 for go to squirrel. 2 for go to road.
```

Then it pauses and this is where you type 1 or 2. When we answer it just ends though. Let's fix this:

```ruby
if what == "1"
  what_is_1(animal, place)
elsif what == "2"
  what_is_2(animal, place)
else
  #do nothing.
end
```

So this makes something happen but it does not show anything. Why? Well `what_is_1` and `what_is_2` don't exist. Let's put some code above all of our `puts`:

```ruby
def what_is_1(animal, place)
  puts "You go to the " + animal + ", instead of the " + place + "."
end

def what_is_2(animal, place)
  puts "You keep going towards the " + place + "."
end
```

Now when we do this it does not ask again if you answered anything else than `1` or `2`. Let's fix this by putting our

```ruby
puts "Do you go to the " + animal + " or do you stay on track to the " + place + "? 1 for go to " + animal + ". 2 for go to " + place + "."
what = gets.chomp

if what == "1"
  what_is_1(animal, place)
elsif what == "2"
  what_is_2(animal, place)
else
  #do nothing.
end
```

in a loop do so that it looks like this:

```ruby
loop do
  puts "Do you go to the " + animal + " or do you stay on track to the " + place + "? 1 for go to " + animal + ". 2 for go to " + place + "."
  what = gets.chomp

  if what == "1"
    what_is_1(animal, place)
    break
  elsif what == "2"
    what_is_2(animal, place)
    break
  else
    #do nothing.
  end
end
```

As you can see I added `break`s in the `if`s so that the `loop do` ends.

## Looping

I am gonna go out on a whim and put:

```ruby
puts "You are going to the " + place + "."
sleep(1)
puts "On the way to the " + place + " you see a " + animal + "."
sleep(1)
puts "You feel that this " + animal + " is calling for you."
sleep(1)
puts "Then you see the " + animal + " has a hat."
sleep(1)
loop do
  puts "Do you go to the " + animal + " or do you still go to the " + place + "? 1 for go to " + animal + ". 2 for go to " + place + ". Answer with terminal."
  what = gets.chomp

  if what == "1"
    what_is_1(animal, place)
    break
  elsif what == "2"
    what_is_2(animal, place)
    break
  else
    #do nothing.
  end
end
```

In a `loop do`. Now let's add a variable called `time` right above our loop:

```ruby
time = 0
```

Then inside the loop let's actually make it useful:

```ruby
time += 1
```

Now in our loop after we add to `time` put:

```ruby
if time > 1
  temp = animal
  animal = place
  place = temp
end
```

Here we basically switch `place` and `animal`. Now let's `exit` if you choose the place:

```ruby
if what == "1"
  what_is_1(animal, place)
  exit unless time.odd?
elsif what == "2"
  what_is_2(animal, place)
  exit if time.odd?
else
  #do nothing.
end
```

Now also switch the variables `animal` and `place`:

```ruby
animal = places.sample
place = find_animal(place, airport, train_station, hedge_maze, road)
```

## Double Checking the code

This is what I ended up with. I may have forgot to document some things I did so just in case here it is:

```ruby
places = [
  "airport",
  "train station",
  "hedge maze",
  "road"
]

airport = {
  animal: "stray dog",
  name: "airport"
}

train_station = {
  animal: "bird",
  name: "train station"
}

hedge_maze = {
  animal: "cow",
  name: "hedge maze"
}

road = {
  animal: "squirrel",
  name: "road"
}

def find_animal(place, airport, train_station, hedge_maze, road)
  if place == "airport"
    airport[:animal]
  elsif place == "train station"
    train_station[:animal]
  elsif place == "hedge maze"
    hedge_maze[:animal]
  elsif place == "road"
    road[:animal]
  end
end

def what_is_1(animal, place)
  puts "You go to the " + animal + ", instead of the " + place + "."
end

def what_is_2(animal, place)
  puts "You keep going towards the " + place + "."
end
time = 0
place = places.sample
animal = find_animal(place, airport, train_station, hedge_maze, road)
loop do
  time += 1
  if time > 1
    temp = place
    place = animal
    animal = temp
  end
  puts "You are going to the " + place + "."
  sleep(1)
  puts "On the way to the " + place + " you see a " + animal + "."
  sleep(1)
  puts "You feel that this " + animal + " is calling for you."
  sleep(1)
  puts "Then you see the " + animal + " has a hat."
  sleep(1)
  loop do
    puts "Do you go to the " + animal + " or do you still go to the " + place + "? 1 for go to " + animal + ". 2 for go to " + place + ". Answer with terminal."
    what = gets.chomp

    if what == "1"
      what_is_1(animal, place)
      exit unless time.odd?
    elsif what == "2"
      what_is_2(animal, place)
      exit if time.odd?
    else
      #do nothing.
    end
  end
end

```

A lot of Code right? Well this is now your knowledge of the programming language `ruby`.

_P.S. Please enjoy your airport with a hat!_

**Also see:**
