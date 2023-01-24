#!/bin/bash
egrep '\\.html$' public/index.txt \
  | perl -pe 's#/index.html#/#; s#^$#/#' \
  | sort > public/urls.txt