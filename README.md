# BlipBuilderUtils
A collection of useful `JS` codes to use on [BLiP's](https://preview.blip.ai) (chatbot) *Builder* tool.

## Index
1. [Lime Carousel Example](#carouseljson)
1. [Dynamic Carousel Script](#dynamiccarouseljs)
1. [Builder Carousel formatter](#jsreturnblipjs)
1. [CPF Extractor](#extractcpfjs)
1. [CPF Validation](#checkcpfjs)
1. [Reference](#reference)

## carousel.json
It's an example (from [BLiP's Documentation](https://docs.blip.ai)) of the `.json` of a Carousel Media Type

## DynamicCarousel.js
Example of a `JS` function to create dynamic carousels using Builder

## JSReturnBlip.js
Example of an acceptable `JS` function return (using `carousel.json`) that BLiP's Builder can read as a carousel

## ExtractCpf.js
`JS` code to extract a cpf-like string from a full sentence, containing any [9, 11] digits and periods, dashes and spaces on the right places (any ammount of any combination) - and removes the tokens. If the cpf-like string has less than 11 digits, fills it with zeroes at the start. Returns the extracted string.

## CheckCpf.js
Checks if the extracted cpf-like string (from `ExtractCpf.js`) is a valid cpf with less than 10 iterations of any loop (Builder's limitation). Returns a true/false string.

## Reference
* [BLiP Help](https://help.blip.ai/hc/pt-br)
* [BLiP Documentation](https://docs.blip.ai)