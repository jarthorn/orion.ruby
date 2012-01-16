/*******************************************************************************
 * Copyright (c) 2011, 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

/**
 * Provides content assist for Ruby keywords.
 */
var RubyContentAssistProvider = (function() {
	function RubyContentAssistProvider() {
	}
	RubyContentAssistProvider.prototype = {
		computeProposals: function(prefix, buffer, selection) {
			var keywords = ["BEGIN","END","__ENCODING__","__END__","__FILE__","__LINE__","alias","and","begin",
				"break","case","class","def","defined?","do","else","elsif","end","ensure","false","for",
				"if","in","module","next","nil","not","or","redo","rescue","retry","return","self","super",
				"then","true","undef","unless","until","when","while","yield"];
			var templates = [];
			var text, description, positions, endOffset;
		    var prefixStart = selection.offset - prefix.length;
			var precedingChar = buffer.charAt(prefixStart - 1);
			if (precedingChar === '=' && "begin".indexOf(prefix) === 0) {
				//suggest writing a block comment
				text = "begin\n\n=end";
				description = "=begin - block comment";
				endOffset = prefixStart+6;//inside block comment
				templates.push({proposal: text, description: description, escapePosition: endOffset});
			}
			if ("if".indexOf(prefix) === 0) {
				//if statement
				text = "if condition\n\t\nend";
				description = "if - if block";
				positions = [{offset: prefixStart + 3, length: 9}];
				endOffset = prefixStart+14;//inside if block
				templates.push({proposal: text, description: description, positions: positions, escapePosition: endOffset});
			}
			//suggest templates before simple keywords
			return templates.concat(keywords);
				
		}
	};
	return RubyContentAssistProvider;
}());

