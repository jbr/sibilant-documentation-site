window["$"] = require("jquery");
var hljs = window.hljs;
delete window.hljs;
var React = require("react"),
    ReactDOM = require("react-dom"),
    Bootstrap = require("react-bootstrap"),
    sibilantDocs = require("sibilant/docs/docs.json");
window.docs = sibilantDocs;
var sibilantDocsTags = (function() {
  /* /Users/jbr/code/sibilant-website/index.sibilant:18:5 */

  var tags = sibilantDocs.map((function() {
    /* /Users/jbr/code/sibilant/include/macros.sibilant:668:30 */
  
    return arguments[0].tags;
  })).reduce((function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:21:29 */
  
    return arguments[0].concat(arguments[1]);
  }), []),
      counts = {  };
  tags.forEach((function(tag) {
    /* /Users/jbr/code/sibilant-website/index.sibilant:23:6 */
  
    return counts[tag] = ((counts[tag] || 0) + 1);
  }));
  return counts;
}).call(this);
var $_symbol1_$ = Bootstrap,
    Nav = $_symbol1_$.Nav,
    NavItem = $_symbol1_$.NavItem,
    Navbar = $_symbol1_$.Navbar,
    NavDropdown = $_symbol1_$.NavDropdown,
    MenuItem = $_symbol1_$.MenuItem,
    Input = $_symbol1_$.Input,
    Button = $_symbol1_$.Button,
    ButtonToolbar = $_symbol1_$.ButtonToolbar,
    ButtonGroup = $_symbol1_$.ButtonGroup,
    Badge = $_symbol1_$.Badge,
    Glyphicon = $_symbol1_$.Glyphicon,
    Panel = $_symbol1_$.Panel,
    Accordion = $_symbol1_$.Accordion,
    ListGroup = $_symbol1_$.ListGroup,
    ListGroupItem = $_symbol1_$.ListGroupItem,
    PanelGroup = $_symbol1_$.PanelGroup,
    Grid = $_symbol1_$.Grid,
    Row = $_symbol1_$.Row,
    Label = $_symbol1_$.Label,
    Col = $_symbol1_$.Col,
    $_symbol1_$ = undefined;
window["$"] = $;
var camelcaseToWords = (function camelcaseToWords$(tag) {
  /* camelcase-to-words /Users/jbr/code/sibilant-website/index.sibilant:42:0 */

  return tag.replace((new RegExp("[A-Z]", "g")), (function() {
    /* /Users/jbr/code/sibilant/include/macros.sibilant:668:30 */
  
    return (" " + arguments[0]).toLowerCase();
  }));
});
var colorForTag = (function colorForTag$(tag) {
  /* color-for-tag /Users/jbr/code/sibilant-website/index.sibilant:44:0 */

  return (function() {
    switch(tag) {
    case "deprecated":
      return "danger";
    
    case "experimental":
      return "warning";
    
    default:
      return "default";
    }
  }).call(this);
});
var Highlight = React.createClass({
  displayName: "Highlight",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:52:11 */
  
    var highlight = { __html: hljs.highlight({
      js: "js",
      sibilant: "lisp"
    }[this.props.language], this.props.children, true).value };
    return React.createElement("pre", null, React.createElement(Label, { style: {
      float: "right",
      marginTop: -10,
      marginRight: -10,
      borderRadius: 0,
      borderBottomLeftRadius: 3
    } }, this.props.language), React.createElement("code", { dangerouslySetInnerHTML: highlight }));
  })
});
var JSCode = React.createClass({
  displayName: "JSCode",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:66:18 */
  
    return React.createElement(Highlight, { language: "js" }, this.props.children);
  })
});
var SibilantCode = React.createClass({
  displayName: "SibilantCode",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:68:24 */
  
    return React.createElement(Highlight, { language: "sibilant" }, this.props.children);
  })
});
var Example = React.createClass({
  displayName: "Example",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:71:11 */
  
    return React.createElement("div", null, React.createElement("strong", null, ("example " + (1 + this.props.count))), React.createElement(SibilantCode, null, this.props.sibilant), React.createElement(JSCode, null, this.props.js));
  })
});
var MacroDefinition = React.createClass({
  displayName: "MacroDefinition",
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:77:29 */
  
    return { expanded: false };
  }),
  onClick: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:78:20 */
  
    return this.setState({ expanded: !(this.state.expanded) });
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:80:11 */
  
    return React.createElement("div", null, React.createElement(Button, { onClick: this.onClick }, "macro definition ", React.createElement("span", { className: "caret" })), (function() {
      if (this.state.expanded) {
        return React.createElement(SibilantCode, null, this.props.doc.definition);
      }
    }).call(this));
  })
});
var Macro = React.createClass({
  displayName: "Macro",
  getInitialState: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:86:29 */
  
    return { open: false };
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:88:11 */
  
    var doc = this.props.doc,
        _this = this;
    return React.createElement(Panel, {
      onClick: (function() {
        /* /Users/jbr/code/sibilant-website/index.sibilant:92:21 */
      
        return _this.setState({ open: !(_this.state.open) });
      }),
      header: React.createElement("h3", null, React.createElement("code", null, doc.name), React.createElement(ButtonGroup, { style: { float: "right" } }, doc.tags.sort().map((function(tag) {
        /* /Users/jbr/code/sibilant-website/index.sibilant:98:46 */
      
        return React.createElement(Button, {
          bsSize: "xsmall",
          bsStyle: colorForTag(tag),
          onClick: (function() {
            /* /Users/jbr/code/sibilant-website/index.sibilant:100:71 */
          
            return _this.props.setFilter(tag);
          }),
          key: tag
        }, camelcaseToWords(tag));
      }))))
    }, React.createElement("div", null, React.createElement("strong", null, "description"), React.createElement("p", null, doc.description), React.createElement("strong", null, "arguments"), React.createElement(SibilantCode, null, doc.arguments.join(" ")), doc.examples.map((function() {
      /* /Users/jbr/code/sibilant-website/index.sibilant:110:32 */
    
      return React.createElement(Example, {
        key: ("" + doc.name + "/examples/" + arguments[1]),
        count: arguments[1],
        js: arguments[0].javascript,
        sibilant: arguments[0].sibilant
      });
    })), (function() {
      if ((doc.references && doc.references.length)) {
        return React.createElement(ListGroup, null, React.createElement(ListGroupItem, { header: "references" }), doc.references.map((function() {
          /* /Users/jbr/code/sibilant-website/index.sibilant:118:30 */
        
          return React.createElement(ListGroupItem, {
            style: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            key: arguments[1],
            href: arguments[0]
          }, arguments[0]);
        })));
      }
    }).call(this), React.createElement(MacroDefinition, { doc: doc })));
  })
});
var Tags = React.createClass({
  displayName: "Tags",
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:129:11 */
  
    var _this = this,
        tags = this.props.tags,
        filter = this.props.filter;
    return React.createElement(ListGroup, null, React.createElement(ListGroupItem, { header: "Macro tags" }), Object.keys(tags).map((function(tag) {
      /* /Users/jbr/code/sibilant-website/index.sibilant:136:22 */
    
      var active = filter === tag;
      return React.createElement(ListGroupItem, {
        key: tag,
        active: active,
        style: { outline: "none" },
        onClick: (function() {
          /* /Users/jbr/code/sibilant-website/index.sibilant:141:48 */
        
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
    /* /Users/jbr/code/sibilant-website/index.sibilant:150:29 */
  
    return { filter: "" };
  }),
  setFilter: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:151:22 */
  
    return this.setState({ filter: arguments[0] });
  }),
  render: (function() {
    /* /Users/jbr/code/sibilant-website/index.sibilant:153:11 */
  
    var filter = this.state.filter,
        _this = this;
    return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Col, {
      mdPush: 7,
      sm: 3
    }, React.createElement(Tags, {
      filter: filter,
      tags: _this.props.tags,
      setFilter: _this.setFilter
    })), React.createElement(Col, {
      md: 7,
      sm: 8,
      mdPull: 3
    }, this.props.docs.filter((function(doc) {
      /* /Users/jbr/code/sibilant-website/index.sibilant:163:38 */
    
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
      /* /Users/jbr/code/sibilant-website/index.sibilant:167:35 */
    
      return React.createElement(Macro, {
        setFilter: this.setFilter,
        key: doc.name,
        doc: doc
      });
    }), this))));
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
  disabled: true,
  buttonAfter: React.createElement(Button, {
    type: "submit",
    disabled: true
  }, React.createElement(Glyphicon, { glyph: "search" }))
})))), React.createElement(DocListing, {
  tags: sibilantDocsTags,
  docs: sibilantDocs
})), document.getElementById("app"));