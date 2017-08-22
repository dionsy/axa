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
    <div id="fond-mon-axa">
        <div  class="highlighted container"><?php print render($page['highlighted']); ?></div>
    </div> 
  <?php endif; ?> 

     <?php if (!empty($page['connexion'])): ?>
        <div class="container"><?php print render($page['connexion']); ?></div>
    <?php endif; ?>

  <div class="main-container "> 
     <div class="row">
         <section>            
            <a id="main-content"></a>
            <?php print render($page['content']); ?>
          </section>
      </div>            
    </div>
</div>