<?php
module_load_include('module','ws_client');
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */

?>
<div class="fix-footer">
<div class="page">
<div id="navbar" class="collapse navbar-collapse ">
  <header role="banner" id="page-header">
    <?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>

    <?php print render($page['header']); ?>
  </header> 
</div>
  <!-- /#page-header -->
  
<div class="main-container <?php print $container_class; ?>">

<section class="row">
<header id="" role="banner" class="navbar col-xs-12 col-sm-12 col-md-9 col-lg-9">
  <div class="">
    <div class="navbar-header">
      <?php if ($logo): ?>
        <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <img class="img-responsive" src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      <?php endif; ?>
 
      </div>   
  </div>
</header>

 <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      <div class="info-left-menu col-xs-12 col-sm-12 col-md-3 col-lg-3" id="">
        <nav role="navigation">
          <div class="row espace">
             <div class="espace-client col-xs-4 col-sm-4 col-md-8 col-lg-8">
               <p>Mon espace client</p>
               <div class="barre"></div>
             </div>
             <div class="nom-client col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <?php
                  $account = array();
                  if(user_is_logged_in())
                    $account = user_load($user->uid); 
                    if(isset($account)) {
                      $array = ws_client_getInfoUser();
                      print '<span>'.$array['nom']. '</span>';                    
                    }  
               ?>
             </div>
          </div>
          <div class="row">
             <div class="deconnexion col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <a href="?q=user/logout"> <?php print t('Logout') ;?></a>
             </div>
          </div>
        </nav>
      </div>
    <?php endif; ?>
    
</section>





  <div class="row">
     <?php if (!empty($page['connexion'])): ?>
     <!--  <aside class="col-sm-3"></aside> -->
      <aside class="col-xs-12 col-sm-12 col-md-4 col-lg-4 connexion">
        <?php print render($page['connexion']); ?>
      </aside>  <!-- /#sidebar-first -->
     <!--  <aside class="col-sm-3"></aside> -->
    <?php endif; ?>
 



    <section id="test" class="col-xs-12 col-sm-12 col-md-9 col-lg-9 connexion">   
      <a id="main-content"></a>
      <?php print $messages; ?>
      <?php print render($page['content']); ?>
    </section>

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="mon-conseiller col-xs-12 col-sm-12 col-md-3 col-lg-3 sidebar_first">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>
 

  </div>
</div>
</div> <!-- end page -->

<?php if (!empty($page['footer'])): ?>
  <!-- <footer class="footer-client <?php print $container_class; ?>">
  <div class="container">
    <?php print render($page['footer']); ?>
  </div>
  </footer> -->
</div> <!-- end fix-footer -->
<?php endif; ?>

