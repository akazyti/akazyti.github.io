---
layout: index.njk
title: List of 3day 
description: A simple 3 Day
---

# List of 3 Day

Here is List of 3day i usually post regularly


### 2020 

<div class="blogList" >
{% for pins in collections.day %}
   - <span><a href="{{ pins.url  }}">{{ pins.data.title }}</a></span>  <span>{{ pins.data.date.toDateString('YYYY-MM-DD') }}</span>
{% endfor %}

</div>

