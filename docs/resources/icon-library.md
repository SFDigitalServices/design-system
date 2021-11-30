---
title: Icon library
see_also:
  - title: Icon usage
    href: /usage/icons/
---

<div class="flex flex-wrap">
  {% for icon in icons -%}
    <div class="w-1/2 lg:w-1/3 mb-80">
      <div class="mx-28 no-underline text-center text-slate">
        <div class="flex justify-around mb-4">
          <sfgov-icon
            class="p-20 lg:p-60 xl:p-80 border-1 border-solid border-grey-2"
            width="28"
            height="28"
            symbol="{{ icon.symbol }}"
          ></sfgov-icon>
        </div>
        <clipboard-copy
          aria-label="Copy &lsquo;{{ icon.symbol }}&rsquo; to the clipboard"
          value="{{ icon.symbol }}"
          data-copy-feedback="Name copied"
          class="cursor-pointer flex relative group py-4 hover:bg-slate-1"
        >
          <div class="w-full text-slate-4 font-mono pl-20">{{ icon.symbol }}</div>
          <sfgov-icon
            symbol="document"
            class="text-slate-3 invisible group-hover:visible"
            width="20"
            height="16"
          ></sfgov-icon>
        </clipboard-copy>
      </div>
    </div>
  {% endfor %}
</div>
