# Mutipipe Game Display Components
Exported components for use in the Mutlipipe web game.  These are made public so they can be
imported into a constructed stream overlay, but were intitially written for use in the main
game interface.

Technical details about the implementation and advanced usage should not be required for
adding a basic web source in OBS, but may be useful for more advanced integration with
OBS Scenes and other such funtimes.

If you are looking to consume events related to the game's progress in your overlay,
you should probably look at the documentation for `@shieldmaidengames/multipipe-shared`.


## Background
Web components are reusable isolated chunks of markup, javascript, and styling.  They should
be implemented such that they are portable across contexts, and help build more decoupled
frontends.  They are a W3C standard, but the standard as implemented is a bit unweildy, so
this package uses the Lit web component framework to ease some of the boilerplate.


### Lit
While the Lit documentation covers things well beyond the scope of this package, there are 
a few things that should be pointed out.

* This package makes strong use of reactive controllers and tasks
* Exported components will use contexts when possible
* Exported components will use Component Injectors (see './lifecycle/') for dependencies


## Dependency Management/Injection

This package exports some components that depend on other classes such as Controllers.  Instead of creating these controllers (and other dependencies) manually in the element
constructor or `connectedCallback()`, dependencies should be injected through the use of ComponentInjectors.  The basic injection lifecycle flows like this:

1) Component is created (not adopted into the DOM)
2) Component is adopted into the dom (connectedCallback is called)
3) In the connectedCallback() the Component issues an InjectionRequest event asking for a ComponentInjector of the correct type by token, suppling a promise resolution function to be called by the resolving code.
4) An event listener (of some type) should catch the event, use the token to obtain the correct ComponentInjector using a dependency injection container (ditox by default), and then use the supplied resolution callback to return it to the Component.
5) The Component will then use the properties of the returned Injector to fill out the Component dependencies

NOTE: [https://elfsternberg.com/blog/dependency-injection-with-lit/] is the inspiration for the dependency management