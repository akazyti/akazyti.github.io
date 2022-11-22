---
layout: index.njk
title: Startups - Akash Chaudhari
description: List of Startups i am involved In
---


### Startups 

List of All Startups Either ended or i am working on....

<div class="blogList" >
{% for startup in startups %}

<span><a href="/startups/{{ startup.name | slug }}/">{{startup.name}}</a> </span>

{% endfor %}
</div>
