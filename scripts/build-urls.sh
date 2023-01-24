#!/bin/bash
grep '\\.html$' public/index.txt \
  | perl -pe 's#/index.html#/#; s#^$#/#' \
  | sort > public/urls.txt