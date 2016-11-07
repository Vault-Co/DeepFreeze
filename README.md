# DeepFreeze
Snippet showing how to declare constants in Javascript and deepfreeze all associated objects.

Use constants in your Javascript to get rid of magic numbers and string literals.

A short piece of code at the top of your page declares all constants in a
structured format and calls freeze on all related elements to make sure
they are immutable at run-time. This polyfill will work even on IE5.5 and
gives your code a nice organized look that is self-documenting.

It vastly improves maintainability in the unfortunate instance where you
are hit by a bus and never commented your code. 
