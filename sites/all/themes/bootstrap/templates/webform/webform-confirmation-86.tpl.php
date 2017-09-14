
<div class="webform-confirmation">
  <?php if ($confirmation_message): ?>
    <?php print $confirmation_message ?>
  <?php else: ?>	
	<i class="fa fa-check-circle" aria-hidden="true"></i>
    <p class="confir"><?php print t('Thank you, your submission has been received.'); ?></p>
  <?php endif; ?>
</div>