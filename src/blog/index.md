---
layout: index.njk
title: Blog - Akash chaudhari
description: Blog Homepage for Akash Chaudhari
---
# Blog

I am a occasional writer .... writes about tech, life.....

### Blogs 

<div class="blogList" >
{% for pins in collections.pins %}
<span><a href="{{ pins.url  }}">{{ pins.data.title }}</a></span>  <span>{{ pins.data.date.toDateString('YYYY-MM-DD') }}</span>
{% endfor %}

</div>

