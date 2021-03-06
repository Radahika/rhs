module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = function(exp) {return exp; },
        peg$c1 = { type: "other", description: "regexp" },
        peg$c2 = peg$FAILED,
        peg$c3 = function(term, exp) {return {type:".", arg1: term, arg2: exp};},
        peg$c4 = "|",
        peg$c5 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c6 = function(term1, term2, exp) {return {type:".", arg1:{type:"|", arg1:term1, arg2: term2}, arg2:exp}; },
        peg$c7 = function(term1, term2) {return {type:"|", arg1:term1, arg2: term2}; },
        peg$c8 = function(term) {return term; },
        peg$c9 = "*",
        peg$c10 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c11 = function(term) {return {type:"*", arg:term}; },
        peg$c12 = "+",
        peg$c13 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c14 = function(term) {return {type:"+", arg:term}; },
        peg$c15 = "?",
        peg$c16 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c17 = function(term) {return {type:"?", arg:term}; },
        peg$c18 = "{",
        peg$c19 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c20 = "}",
        peg$c21 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c22 = function(term, exactly) {return {type:"repeat", arg:term, exactly:exactly}; },
        peg$c23 = ",",
        peg$c24 = { type: "literal", value: ",", description: "\",\"" },
        peg$c25 = function(term, from, to) {return {type:"repeat", arg:term, from:from, to:to}; },
        peg$c26 = ",}",
        peg$c27 = { type: "literal", value: ",}", description: "\",}\"" },
        peg$c28 = function(term, from) {return {type:"repeat", arg:term, from:from, to:"infinity"}; },
        peg$c29 = "[^",
        peg$c30 = { type: "literal", value: "[^", description: "\"[^\"" },
        peg$c31 = [],
        peg$c32 = "]",
        peg$c33 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c34 = function(set) {return {type:"not-set", set:set}; },
        peg$c35 = "[",
        peg$c36 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c37 = function(set) {return {type:"set", set:set}; },
        peg$c38 = "(",
        peg$c39 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c40 = ")",
        peg$c41 = { type: "literal", value: ")", description: "\")\"" },
        peg$c42 = function(exp) { return {type:"group", group:exp}; },
        peg$c43 = function(alphanum) {return alphanum; },
        peg$c44 = function(special) {return special;},
        peg$c45 = ".",
        peg$c46 = { type: "literal", value: ".", description: "\".\"" },
        peg$c47 = function(wildcard) {return {type:"wildcard"};},
        peg$c48 = /^[a-zA-Z0-9]/,
        peg$c49 = { type: "class", value: "[a-zA-Z0-9]", description: "[a-zA-Z0-9]" },
        peg$c50 = function(char) { return {type: "literal", val:char}; },
        peg$c51 = /^[+\-!@#$%\^&*():,.]/,
        peg$c52 = { type: "class", value: "[+\\-!@#$%\\^&*():,.]", description: "[+\\-!@#$%\\^&*():,.]" },
        peg$c53 = function(char) {return {type:"literal", val:char};},
        peg$c54 = /^[0-9]/,
        peg$c55 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c56 = function(num) { return num;},
        peg$c57 = /^[\\]/,
        peg$c58 = { type: "class", value: "[\\\\]", description: "[\\\\]" },
        peg$c59 = /^[csSdDwWxOtnr]/,
        peg$c60 = { type: "class", value: "[csSdDwWxOtnr]", description: "[csSdDwWxOtnr]" },
        peg$c61 = function(special) {return {type: "special", val:special}; },
        peg$c62 = /^[.*+?]/,
        peg$c63 = { type: "class", value: "[.*+?]", description: "[.*+?]" },
        peg$c64 = function(escaped) {return {type: "escaped", val:escaped}; },
        peg$c65 = /^[a-z]/,
        peg$c66 = { type: "class", value: "[a-z]", description: "[a-z]" },
        peg$c67 = "-",
        peg$c68 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c69 = function(start, end) { return {type:"range", from:start, to:end}; },
        peg$c70 = /^[A-Z]/,
        peg$c71 = { type: "class", value: "[A-Z]", description: "[A-Z]" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parseR();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseR() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseTERM();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseR();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c3(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseTERM();
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 124) {
            s2 = peg$c4;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c5); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseTERM();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseR();
              if (s4 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c6(s1, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseTERM();
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 124) {
              s2 = peg$c4;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c5); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parseTERM();
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c7(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseTERM();
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c8(s1);
            }
            s0 = s1;
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c1); }
      }

      return s0;
    }

    function peg$parseTERM() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parseATOMICTERM();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 42) {
          s2 = peg$c9;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c10); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c11(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseATOMICTERM();
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 43) {
            s2 = peg$c12;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c14(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseATOMICTERM();
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 63) {
              s2 = peg$c15;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s2 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c17(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseATOMICTERM();
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 123) {
                s2 = peg$c18;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c19); }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$parseNUM();
                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s4 = peg$c20;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c21); }
                  }
                  if (s4 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c22(s1, s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseATOMICTERM();
              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 123) {
                  s2 = peg$c18;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c19); }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseNUM();
                  if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s4 = peg$c23;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c24); }
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = peg$parseNUM();
                      if (s5 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s6 = peg$c20;
                          peg$currPos++;
                        } else {
                          s6 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c21); }
                        }
                        if (s6 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c25(s1, s3, s5);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c2;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseATOMICTERM();
                if (s1 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 123) {
                    s2 = peg$c18;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c19); }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseNUM();
                    if (s3 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c26) {
                        s4 = peg$c26;
                        peg$currPos += 2;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c27); }
                      }
                      if (s4 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c28(s1, s3);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseATOMICTERM();
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c8(s1);
                  }
                  s0 = s1;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseATOMICTERM() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c29) {
        s1 = peg$c29;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c30); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseSET();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseSET();
          }
        } else {
          s2 = peg$c2;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c32;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c33); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c34(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 91) {
          s1 = peg$c35;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseSET();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseSET();
            }
          } else {
            s2 = peg$c2;
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s3 = peg$c32;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c33); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c37(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 40) {
            s1 = peg$c38;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseR();
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s3 = peg$c40;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c41); }
              }
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c42(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseALPHANUM();
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c43(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseSPECIAL();
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c44(s1);
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 46) {
                  s1 = peg$c45;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c46); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c47(s1);
                }
                s0 = s1;
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseALPHANUM() {
      var s0, s1;

      s0 = peg$currPos;
      if (peg$c48.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c50(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseALLCHAR() {
      var s0, s1;

      s0 = peg$parseALPHANUM();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c51.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c52); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c53(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseNUM() {
      var s0, s1;

      s0 = peg$currPos;
      if (peg$c54.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c56(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseSPECIAL() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (peg$c57.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c58); }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c59.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c60); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c61(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c57.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c58); }
        }
        if (s1 !== peg$FAILED) {
          if (peg$c62.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c63); }
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c64(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      }

      return s0;
    }

    function peg$parseSET() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c65.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c66); }
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s2 = peg$c67;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c68); }
        }
        if (s2 !== peg$FAILED) {
          if (peg$c65.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c66); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c69(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (peg$c70.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c71); }
        }
        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s2 = peg$c67;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c68); }
          }
          if (s2 !== peg$FAILED) {
            if (peg$c70.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c71); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c69(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (peg$c54.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c55); }
          }
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s2 = peg$c67;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c68); }
            }
            if (s2 !== peg$FAILED) {
              if (peg$c54.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c55); }
              }
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c69(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$parseALLCHAR();
            if (s0 === peg$FAILED) {
              s0 = peg$parseSPECIAL();
            }
          }
        }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();