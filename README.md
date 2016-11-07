# DeepFreeze
Snippet showing how to declare constants in Javascript and deepfreeze all associated objects.

Javascript and JQuery desperately need static consts and typesafe reference variables!
This little fragment shows you how to do it wherever it is needed in your page or library!

Use constants in your Javascript to get rid of magic numbers and string literals.

A short piece of code at the top of your page declares all constants in a
structured format and calls freeze on all related elements to make sure
they are immutable at run-time. This polyfill will work even on IE5.5 and
gives your code a nice organized look that is self-documenting.

It vastly improves maintainability and readability.
