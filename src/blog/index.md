---
layout: index.njk
title: Blog - Akash chaudhari
description: Blog Homepage for Akash Chaudhari
---
# Blog

I am a occational writer and here i write don't explain any tech like react but write about life and people and lifelong learnings.

### Blogs 

<div class="blogList" >
{% for pins in collections.pins %}
   - <span><a href="{{ pins.url  }}">{{ pins.data.title }}</a></span>  <span>{{ pins.data.date.toDateString('YYYY-MM-DD') }}</span>
{% endfor %}

</div>

