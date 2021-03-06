<?php
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

 <header id="" role="banner" class="container navbar-default">
             <div class="row">
                  <header role="banner" id="page-header" class="first_menu col-md-9 col-lg-9 col-sm-6 col-xs-12">  
                     <?php print render($page['header']); ?>
                  </header> <!-- /#page-header -->
                  <div class="user col-md-3 col-lg-3 col-sm-6 col-xs-12"> 
                 <?php
                    if(!user_is_logged_in()){
                      print '<div class="mon_espace_client" ><a href="'.$base_path.'user" class="es_cli"><i class="fa fa-user" aria-hidden="true"></i><span>Espace client</span></a></div>';
                    } 
                   else{
                    $nom = variable_get('nom_'.$user->uid);
                      $prenom = variable_get('prenom_'.$user->uid); 
                      $array = array('nom' =>$nom,
                                     'prenom' => $prenom) ;

                      print '<div class="mon_espace_client espace_connecter" ><a href="'.$base_path.'node/2" class="es_cli"><i class="fa fa-home" aria-hidden="true"></i><span>'.$array['prenom'].'  '.$array['nom']. '</span></div></a><div class="deconnection"><a href="'.$base_path.'?q=user/logout"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Déconnexion</span></a></div>';
                    }
                   
                  ?>      
                 <?php
          /*  $account = user_load($user->uid);
            $pic ='';
            if(isset($account->picture))
              $pic=$account->picture;
            $img = file_create_url($pic->uri);
            print '<div class="avatar"><img class="img-responsive hidden-xs-down" src="'.$img.'" /> <span>'.$account->name. '</span></div>';
            }*/
                  ?> 
            
                                 
                </div>
              </div>
           
            <div class="logo col-md-9 col-lg-9 col-xs-12 <?php //print $container_class; ?>">    
              <div class="navbar-header ">
                <?php if ($logo): ?>
                  <a class="navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                    <img class ="img-responsive" src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                  </a>
                <?php endif; ?>


                  <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                      <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  <?php endif; ?>
               </div>
            </div>
             <div class="appli col-md-3 col-lg-3 col-xs-12 col-sm-6">
              <div class="prez-mon-axa">
                <i class="" aria-hidden="true">
                    <img src="<?php echo $base_path . drupal_get_path('theme', 'bootstrap') .'/images/etiquette_mon_axa.png' ?>" alt="mon axa"> </i>
                  <a href="node/114" >Découvrir Mon Axa</a>
              </div>
            </div>
        </header>

<!-- region slideshow -->
 <?php if (!empty($page['navigation'])): ?>
          <div class="fond">
          <div class=" navigation <?php print $container_class; ?>">
            <?php print render($page['navigation']); ?>
            </div>
        </div>
  <?php endif; ?>
  
 <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
  <?php endif; ?>


<div class="main-container <?php print $container_class; ?>"> 
  <div class="">
    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>

     <?php if (!empty($page['connexion'])): ?>
      <aside class="col-sm-3"></aside>
      <aside class="col-sm-6 connexion">
        <?php print render($page['connexion']); ?>
      </aside>  <!-- /#sidebar-first -->
      <aside class="col-sm-3"></aside>
    <?php endif; ?>
<?php  //if(user_is_logged_in()) { ?>

     
    <section id="test" <?php print $content_column_class; ?>>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
       <!--  <h1 class="page-header"><?php //print $title; ?></h1> -->
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>

      <?php
       
        // krumong('main')->kPrint($results);
         print render($page['content']); 
        ?>
       
      
    </section>
</div>

  <?php if (!empty($page['bottom'])): ?>
    <div class="bottom">
    <aside class="bottom">
      <?php print render($page['bottom']); ?>
    </aside>
    </div>
  <?php endif; ?>

    
    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>
    
  </div>

<?php if (!empty($page['content_bottom'])): ?>
  <div class="page-bottom row">
    <aside class="content_bottom col-xs-12 col-md-12 col-lg-12">
      <?php print render($page['content_bottom']); ?>
    </aside>
  </div>
<?php endif; ?>

<?php if (!empty($page['footer_top'])): ?>
  <div class="footer_top">
    <footer class="footer_top <?php print $container_class; ?>">
      <?php print render($page['footer_top']); ?>
    </footer>
  </div>
<?php endif; ?>
</div> <!-- End Page -->


<?php if (!empty($page['footer'])): ?>
  <footer class="footer">
  <div class="container">
    <?php print render($page['footer']); ?>
  </div>
  </footer>
</div>
<?php endif; ?>