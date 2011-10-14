/*******************************************************************************
 * Copyright (c) 2011 IBM Corporation and others.
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
		getKeywords: function(prefix, buffer, selection) {
			return ["BEGIN","END","__ENCODING__","__END__","__FILE__","__LINE__","alias","and","begin",
				"break","case","class","def","defined?","do","else","elsif","end","ensure","false","for",
				"if","in","module","next","nil","not","or","redo","rescue","retry","return","self","super",
				"then","true","undef","unless","until","when","while","yield"];
		}
	};
	return RubyContentAssistProvider;
}());

