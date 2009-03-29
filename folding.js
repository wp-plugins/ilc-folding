/* ILC-Folding
 * http://ilovecolors.com.ar/folding-menu-plugin-wordpress/
 */

jQuery(document).ready(function(){

	jQuery(".page_item ul").hide();

	jQuery(".current_page_item ul:first").slideDown();
	
	jQuery(".current_page_item").parents("ul, li")
				.map(function () { 
					jQuery(this).slideDown();
				});
	
		

}); 