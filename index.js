window["$"] = require("jquery");
var React = require("react"),
    ReactDOM = require("react-dom"),
    Bootstrap = require("react-bootstrap"),
    sibilant = require("sibilant/lib/browser").sibilant;
var $_symbol1_$ = Bootstrap,
    Nav = $_symbol1_$.Nav,
    NavItem = $_symbol1_$.NavItem,
    Navbar = $_symbol1_$.Navbar,
    NavDropdown = $_symbol1_$.NavDropdown,
    MenuItem = $_symbol1_$.MenuItem,
    Input = $_symbol1_$.Input,
    Button = $_symbol1_$.Button,
    ButtonToolbar = $_symbol1_$.ButtonToolbar,
    Badge = $_symbol1_$.Badge,
    Glyphicon = $_symbol1_$.Glyphicon,
    Panel = $_symbol1_$.Panel,
    Accordion = $_symbol1_$.Accordion,
    ListGroup = $_symbol1_$.ListGroup,
    ListGroupItem = $_symbol1_$.ListGroupItem,
    PanelGroup = $_symbol1_$.PanelGroup,
    Grid = $_symbol1_$.Grid,
    Row = $_symbol1_$.Row,
    Col = $_symbol1_$.Col,
    $_symbol1_$ = undefined;
window.sibilant = sibilant;
window["$"] = $;
var camelcaseToWords = (function camelcaseToWords$(tag) {
  /* camelcase-to-words /Users/jbr/code/sibilant-website/index.sibilant:25:0 */

  return tag.replace((new RegExp("[A-Z]", "g")), (function() {
    /* /Users/jbr/code/sibilant/include/macros.sibilant:668:30 */
  
    return (" " + arguments[0]).toLowerCase();
  }));
});
var Example = React.createClass({
  displayName: "Example",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:29:18 */
  
    return React.createElement("div", null, React.createElement("strong", null, ("example " + (1 + this.props.count))), React.createElement("pre", { className: "sibilant" }, React.createElement("code", null, this.props.sibilant)), React.createElement("pre", { className: "js" }, React.createElement("code", null, this.props.js)));
  })
});
var MacroDefinition = React.createClass({
  displayName: "MacroDefinition",
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:35:29 */
  
    return { expanded: false };
  }),
  onClick: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:36:20 */
  
    return this.setState({ expanded: !(this.state.expanded) });
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:37:18 */
  
    return React.createElement("div", null, React.createElement(Button, { onClick: this.onClick }, "macro definition ", React.createElement("span", { className: "caret" })), (function() {
      if (this.state.expanded) {
        return React.createElement("pre", { className: "sibilant" }, React.createElement("code", null, this.props.doc.definition));
      }
    }).call(this));
  })
});
var Macro = React.createClass({
  displayName: "Macro",
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:45:29 */
  
    return { open: false };
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:46:18 */
  
    var doc = this.props.doc,
        _this = this;
    return React.createElement(Panel, {
      header: React.createElement("h3", null, ("" + doc.name)),
      onClick: (function() {
        /* /Users/jbr/code/sibilant-website/index.sibilant:52:35 */
      
        return _this.setState({ open: !(_this.state.open) });
      })
    }, React.createElement("div", null, React.createElement("p", null, doc.description), doc.examples.map((function() {
      /* /Users/jbr/code/sibilant-website/index.sibilant:55:46 */
    
      return React.createElement(Example, {
        key: ("" + doc.name + "/examples/" + arguments[1]),
        count: arguments[1],
        js: arguments[0].javascript,
        sibilant: arguments[0].sibilant
      });
    })), (function() {
      if ((doc.references && doc.references.length)) {
        return React.createElement("div", null, React.createElement("strong", null, "references"), React.createElement("ol", null, doc.references.map((function() {
          /* /Users/jbr/code/sibilant-website/index.sibilant:64:45 */
        
          return React.createElement("li", { key: arguments[1] }, React.createElement("a", { href: arguments[0] }, arguments[0]));
        }))));
      }
    }).call(this), React.createElement(MacroDefinition, { doc: doc }), React.createElement(ButtonToolbar, null, doc.tags.map((function(tag) {
      /* /Users/jbr/code/sibilant-website/index.sibilant:69:48 */
    
      return React.createElement(Button, {
        bsSize: "xsmall",
        onClick: (function() {
          /* /Users/jbr/code/sibilant-website/index.sibilant:70:73 */
        
          return _this.props.setFilter(tag);
        }),
        key: tag
      }, camelcaseToWords(tag));
    })))));
  })
});
var Tags = React.createClass({
  displayName: "Tags",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:77:18 */
  
    var _this = this,
        tags = this.props.tags,
        filter = this.props.filter;
    return React.createElement(ListGroup, null, React.createElement(ListGroupItem, { header: "Macro tags" }), Object.keys(tags).map((function(tag) {
      /* /Users/jbr/code/sibilant-website/index.sibilant:85:34 */
    
      var active = filter === tag;
      return React.createElement(ListGroupItem, {
        key: tag,
        active: active,
        onClick: (function() {
          /* /Users/jbr/code/sibilant-website/index.sibilant:89:54 */
        
          return _this.props.setFilter((function() {
            if (active) {
              return "";
            } else {
              return tag;
            }
          }).call(this));
        })
      }, (function() {
        if (active) {
          return React.createElement(Glyphicon, { glyph: "remove" });
        }
      }).call(this), " ", camelcaseToWords(tag), " ", React.createElement(Badge, null, tags[tag]));
    })));
  })
});
var DocListing = React.createClass({
  displayName: "DocListing",
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:98:29 */
  
    return { filter: "" };
  }),
  setFilter: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:99:22 */
  
    return this.setState({ filter: arguments[0] });
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:100:18 */
  
    var filter = this.state.filter,
        _this = this;
    return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Col, {
      md: 7,
      mdOffset: 1,
      sm: 8
    }, this.props.docs.filter((function(doc) {
      /* /Users/jbr/code/sibilant-website/index.sibilant:105:46 */
    
      return (function() {
        if (filter) {
          return (doc.tags || []).indexOf(filter) !== -1;
        } else {
          return true;
        }
      }).call(this);
    })).sort((function() {
      /* /Users/jbr/code/sibilant/include/macros.sibilant:668:30 */
    
      return arguments[0].name.toString().localeCompare(arguments[1].name);
    })).map((function(doc) {
      /* /Users/jbr/code/sibilant-website/index.sibilant:109:43 */
    
      return React.createElement(Macro, {
        setFilter: this.setFilter,
        key: doc.name,
        doc: doc
      });
    }), this)), React.createElement(Col, {
      sm: 3,
      fixed: true
    }, React.createElement(Tags, {
      filter: filter,
      tags: _this.props.tags,
      setFilter: _this.setFilter
    }))));
  })
});
ReactDOM.render(React.createElement("div", null, React.createElement(Navbar, { inverse: true }, React.createElement(Navbar.Header, null, React.createElement(Navbar.Brand, null, React.createElement("a", { href: "http://sibilantjs.info" }, "Sibilant JS")), React.createElement(Navbar.Toggle, null)), React.createElement(Navbar.Collapse, null, React.createElement(Nav, null, React.createElement(NavItem, {
  eventKey: 1,
  href: "https://github.com/jbr/sibilant"
}, "Github"), React.createElement(NavItem, {
  eventKey: 2,
  href: "#"
}, "REPL")), React.createElement(Navbar.Form, { pullRight: true }, React.createElement(Input, {
  type: "text",
  placeholder: "Search",
  disabled: true
}), React.createElement(Button, {
  type: "submit",
  disabled: true
}, React.createElement(Glyphicon, { glyph: "search" }))))), React.createElement(DocListing, {
  tags: sibilant.docs.tags(),
  docs: sibilant.docs.data()
})), document.getElementById("app"));