---
title: Icons
---

See the [Icons code page](./code/) for usage information.

<div class="flex flex-wrap">
  {% for icon in icons -%}
    <div class="w-1/3 mb-80">
      <a href="{{ icon.url }}" class="block mx-28 no-underline text-center text-slate hover:text-action">
        <div class="flex justify-around">
          <sfgov-icon
            class="p-80 border-1 border-solid border-slate-2 hover:border-current"
            width="28"
            height="28"
            symbol="{{ icon.symbol }}"
          ></sfgov-icon>
        </div>
        <div class="my-8 text-center font-medium">
          {{ icon.name }}
        </div>
      </a>
    </div>
  {% endfor %}
</div>
