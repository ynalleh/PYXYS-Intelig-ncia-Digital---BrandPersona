<?php
// Bloqueia acesso direto
if (!defined('ABSPATH'))
  exit;


// ─── SUPORTES DO TEMA ──────────────────────────────────────────────────────────

function nautilus_theme_setup()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'nautilus_theme_setup');


// ─── ENFILEIRAMENTO DE CSS E JS ────────────────────────────────────────────────

function nautilus_enqueue_assets()
{
  $theme_uri = get_template_directory_uri();
  $theme_path = get_template_directory();

  // ─── Estilos por seção ───────────────────────────────────────────────────────
  $styles = [
    'hero' => 'hero.css',
    'results' => 'results.css',
    'versions' => 'section-version.css',
    'brand-benefits' => 'brand-benefits.css',
    'help-brandpersona' => 'help-brandpersona.css',
    'contact-cta' => 'contact-cta.css',
    'implementation-steps' => 'implementation-steps.css',
    'hi-tec-duo' => 'hi-tec-duo.css',
    'reasons-invest' => 'reasons-invest.css',
    'business-duo' => 'business-duo.css'
  ];

  foreach ($styles as $handle => $file) {
    wp_enqueue_style(
      "{$handle}-style",
      $theme_uri . "/assets/css/{$file}",
      [],
      filemtime($theme_path . "/assets/css/{$file}")
    );
  }

  // ─── Fontes externas ─────────────────────────────────────────────────────────
  wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css', [], null);

  // ─── Bibliotecas JS externas ─────────────────────────────────────────────────
  wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', [], null, true);
  wp_enqueue_script('scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', ['gsap'], null, true);

  // ─── Scripts personalizados ──────────────────────────────────────────────────
  wp_enqueue_script('hero-script', $theme_uri . '/assets/js/hero.js', ['gsap', 'scrolltrigger'], filemtime($theme_path . '/assets/js/hero.js'), true);
  wp_enqueue_script('main-js', $theme_uri . '/assets/js/main.js', ['gsap', 'scrolltrigger'], filemtime($theme_path . '/assets/js/main.js'), true);
  wp_enqueue_script('custom-script', $theme_uri . '/assets/js/script.js', [], filemtime($theme_path . '/assets/js/script.js'), true);
}
add_action('wp_enqueue_scripts', 'nautilus_enqueue_assets');
