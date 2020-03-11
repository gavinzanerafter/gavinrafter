---
title: Making a text-based adventure game
date: '2020-03-10'
published: true
layout: post
tags: ['ruby']
category: example
summary: Coding for kids is an important skill to have for the generation. Many youth have made major web browsers and search engines in the past 20 years
---

In this post I will show you how to make a ruby project.

Go to a coding platform. Make a new folder and call it **`adventure.rb`**. Let's start off with a variable. Enter this into the code

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
ruby ./adventure.rb
```

You should see:

```js
You go to the {insert place here}.
On the way to the {insert place here}, you see a chicken.
```

Obviously the `{insert place here}` would be: hedge maze, airport, train station or road. One thing though... on the way to an airport you would probably not see a _chicken_. So lets make some variables up at the top:

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
  animal: "stray dog"
}

train_station = {
  animal: "bird"
}

hedge_maze = {
  animal: "cow"
}

road = {
  animal: "squirrel"
}
```

Now how would we find the animal based on the place... Functions! Let's make a findAnimal function:

```ruby
def find_animal(place, airport, train_station, hedge_maze, road)
  if var == "airport"
    airport[:animal]
  elsif var == "train station"
    train_station[:animal]
  elsif var == "hedge maze"
    hedge_maze[:animal]
  elsif var == "road"
    road[:animal]
  end
end
```

So this checks what place is and returns the correct animal. Now let's replace

```ruby
puts "On the way to the " + place + ", you see a chicken."
```

With:

```ruby
puts "On the way to the " + place + ", you see a " + find_animal(place, airport, train_station, hedge_maze, road) + "."
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
  animal: "stray dog"
}

train_station = {
  animal: "bird"
}

hedge_maze = {
  animal: "cow"
}

road = {
  animal: "squirrel"
}

def find_animal(place, airport, train_station, hedge_maze, road)
  if var == "airport"
    airport[:animal]
  elsif var == "train station"
    train_station[:animal]
  elsif var == "hedge maze"
    hedge_maze[:animal]
  elsif var == "road"
    road[:animal]
  end
end


place = places.sample
puts "You are going to the " + place + "."
sleep(1)
puts "On the way to the " + place + ", you see a " + find_animal(place, airport, train_station, hedge_maze, road) + "."
```
