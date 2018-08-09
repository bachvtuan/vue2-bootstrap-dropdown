
# vue2-bootstrap-dropdown
> Bootstrap Dropdown Component for Vue 2.x

## Install

``` bash
    npm install vue2-bootstrap-dropdown --save
```

## Usage
Require the component (globally or in another component)
```
components: {
    'mydropdown': require('vue2-bootstrap-dropdown')
},

or 

```
import mydropdown from 'vue2-bootstrap-dropdown'
...
components: {
    'mydropdown'
},

```

Next include in your template

```
<mydropdown ref="theDropdown">
    <div slot="button" >
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" v-on:click="$refs.theDropdown.toogle()" >
        show me <span class="caret"></span>
        </button>
    </div>
    <ul slot="body" class="dropdown-menu">
        <li><a v-on:click="hello" >Hello</a></li>
        <li><a>World</a></li>
    </ul>
</mydropdown>
```

Dropup

```
<div class="dropup">
    <mydropdown ref="theDropdown3"  >
        <div slot="button"  >
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" v-on:click="$refs.theDropdown3.toogle()" >
            Drop up <span class="caret"></span>
            </button>
        </div>
        <ul slot="body" class="dropdown-menu" >
            <li><a>Hello</a></li>
            <li><a>Micheal</a></li>
        </ul>
    </mydropdown>
</div>
```

Without button to dropdown 

```
<mydropdown ref="theDropdown4"  >
    <div slot="button"  >
        <p class="dropdown-toggle" data-toggle="dropdown" v-on:click="$refs.theDropdown4.toogle()"><span class="caret" ></span> no button</p>
    </div>
    <ul slot="body" class="dropdown-menu" >
        <li><a>Hello</a></li>
        <li><a>Micheal</a></li>
    </ul>
</mydropdown>
```