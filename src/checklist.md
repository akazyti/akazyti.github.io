---
layout: index.njk
title: checklist - Akash Chaudhari
description: A Checklist I maintain
tag: post
---

# Checklist

This is the simple checklist that i keep and regularly update. There are level of knowledge i want to know they are 

- I am superman at it <span class="superman-box"> </span>
- I am Champ at it <span class="champ-box"> </span>
- I know enough <span class="enough-box"> </span>
- I Know What it is  but Unfamiliar <span class="noob-box"> </span>

And the List Goes on



{% for checklist in checklists %}
  ### {{ checklist.checklistName }}
<div class="checklist">
  {% for list in checklist.checklist %} <b class="{{ list.status }}">{{ list.name }}</b>
  {% endfor %}
</div>
{% endfor %}



