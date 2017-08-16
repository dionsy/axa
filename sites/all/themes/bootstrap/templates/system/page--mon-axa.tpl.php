<div class="page">
  <header  role="banner" class="container navbar-default">
  <div class="logo col-md-9 col-lg-9 col-xs-12">    
    <div class="navbar-header ">
      <?php if ($logo): ?>
        <a class="navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <img class ="img-responsive" src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      <?php endif; ?>                
    </div>
  </div>
  </header>

  <?php if (!empty($page['highlighted'])): ?>
    <div class="fond">
        <div class="highlighted container"><?php print render($page['highlighted']); ?></div>
    </div> 
  <?php endif; ?> 

     <?php if (!empty($page['connexion'])): ?>
        <div class="container"><?php print render($page['connexion']); ?></div>
    <?php endif; ?>

  <div class="main-container "> 
     <div class="row">
         <section id="test" class="container">
            
            <a id="main-content"></a>
            <?php print render($title_prefix); ?>
            <?php if (!empty($title)): ?>
              <h1 class="page-header"><?php print $title; ?></h1>
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
            <?php print render($page['content']); ?>
          </section>
      </div>            
    </div>
</div>