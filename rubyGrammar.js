/******************************************************************************* 
 * Copyright (c) 2011 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation 
 ******************************************************************************/

/*jslint */
/*global define orion:true window */

/**
 * Provides a grammar that can do some very rough syntax highlighting for Ruby.
 */
var RubyGrammar = (function() {
	return {
		/**
		 * What kind of highlight provider we are.
		 * @public
		 * @type String
		 */
		type: "grammar",
		
		/**
		 * The file extensions that we provide rules for.
		 * @public
		 * @type String[]
		 */
		fileTypes: [ "ru", "rb" ],
		
		/**
		 * Object containing the grammar rules.
		 * @public
		 * @type Object
		 */
		grammar: {
			"name": "Ruby",
			"scopeName": "source.ruby",
			"patterns": [
				{
					//block comments
					"begin": "=begin",
					"end": "=end",
					"contentName": "comment.block.documentation",
					"beginCaptures": {
						"0": { "name": "punctuation.definition.comment.ruby" }
					},
					"endCaptures": {
						"0": { "name": "punctuation.definition.comment.ruby" }
					}
				},
				{  
					//keywords
					"name" : "keyword.control.ruby",
					"match" : "\b(__ENCODING__|__END__|__FILE__|__LINE__|alias|and|begin|break|case|class|def|defined?|do|else|elsif|end|ensure|false|for|if|in|module|next|nil|not|or|redo|rescue|retry|return|self|super|then|true|undef|unless|until|when|while|yield)\b"
				}
			],
			"repository": {
				"attrName": { // attribute name
					"match": "[A-Za-z\\-:]+(?=\\s*=\\s*['\"])",
					"name": "entity.other.attribute.name.html"
				}
			}
		}
	};
}());
