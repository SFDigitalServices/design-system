---
title: Icon library
see_also:
  - title: Icon usage
    href: /usage/icons/
---

<div class="flex flex-wrap">
  {% for icon in icons -%}
    <div class="w-1/2 lg:w-1/3 mb-80">
      <clipboard-copy class="block group" value="{{ icon.symbol }}">
        <div class="mx-28 no-underline text-center text-slate">
          <div class="flex justify-around mb-4">
            <sfgov-icon
              class="p-20 lg:p-60 xl:p-80 border-1 border-solid border-grey-2"
              width="28"
              height="28"
              symbol="{{ icon.symbol }}"
            ></sfgov-icon>
          </div>
          <button class="btn-block py-4 relative border-0 bg-none group-hover:bg-slate-1">
            <div class="w-full text-slate-4 font-mono pl-20">{{ icon.symbol }}</div>
            <sfgov-icon
              symbol="document"
              class="text-slate-3 invisible group-hover:visible"
              width="20"
              height="16"
            ></sfgov-icon>
          </button>
        </div>
      </clipboard-copy>
    </div>
  {% endfor %}
</div>
