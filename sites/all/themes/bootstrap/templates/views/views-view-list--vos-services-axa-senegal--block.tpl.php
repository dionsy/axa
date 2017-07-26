<?php
global $base_path;
?>
<div class="<?php print $classes; ?>"> 

  <?php if ($rows): ?>
    <div class="view-content">
    <ul>
      <?php 
      $i=0;
      foreach ($rows as $row) {
      	print '<li class="item'.$i.'">'.$row.'</li>';
      	$i++;
      }

      ?>
      </ul>
    </div>
  <?php endif; ?> 

    <div class="view-footer">
	<?php
		if(!user_is_logged_in()){
		print '<div class="monespace"><a href="'.$base_path.'user" target="_blank" > Accéder à votre espace client </a></div>';
		} 
		else{
		print '<div class="monespace"><a href="'.$base_path.'node/2" target="_blank"> Accéder à votre espace client </a></div>';
		}
	?>  
    </div>
 
 </div><?php /* class view */ ?>