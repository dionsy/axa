<?php
class MimeMailSystem__HTMLMailSystem__MaillogMailSystem implements MailSystemInterface {
  protected $formatClass;
  protected $mailClass;
  public function __construct() {
    if (drupal_autoload_class('MimeMailSystem__HTMLMailSystem')) {
      $this->formatClass = new MimeMailSystem__HTMLMailSystem;
    }
    else {
      $this->formatClass = new DefaultMailSystem;
    }
    if (drupal_autoload_class('MaillogMailSystem')) {
      $this->mailClass = new MaillogMailSystem;
    }
    else {
      $this->mailClass = new DefaultMailSystem;
    }
  }
  public function format(array $message) {
    return $this->formatClass->format($message);
  }
  public function mail(array $message) {
    return $this->mailClass->mail($message);
  }
}
