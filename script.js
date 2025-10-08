// Smooth accordion slide open/close for services
document.addEventListener('DOMContentLoaded', function () {
  // Accordion toggles
    document.querySelectorAll('.service-item').forEach(function(item){
        item.addEventListener('click', function(){
              const panel = item.nextElementSibling;
                    const symbol = item.querySelector('.toggle-symbol');

                          // If panel open -> close it
                                if(panel.classList.contains('open')){
                                        closePanel(panel, symbol);
                                                return;
                                                      }

                                                            // Close other panels first (single-open behaviour)
                                                                  document.querySelectorAll('.accordion-panel.open').forEach(function(openPanel){
                                                                          const prevItem = openPanel.previousElementSibling;
                                                                                  const prevSymbol = prevItem ? prevItem.querySelector('.toggle-symbol') : null;
                                                                                          if(prevSymbol) prevSymbol.textContent = '+';
                                                                                                  closePanel(openPanel);
                                                                                                        });

                                                                                                              // Open clicked panel
                                                                                                                    openPanel(panel);
                                                                                                                          symbol.textContent = '−'; // minus sign
                                                                                                                              });
                                                                                                                                });

                                                                                                                                  // Helpers
                                                                                                                                    function openPanel(panel){
                                                                                                                                        panel.classList.add('open');
                                                                                                                                            // set max-height to scrollHeight for smooth slide
                                                                                                                                                panel.style.maxHeight = panel.scrollHeight + 'px';
                                                                                                                                                  }
                                                                                                                                                    function closePanel(panel){
                                                                                                                                                        panel.style.maxHeight = panel.scrollHeight + 'px';
                                                                                                                                                            // force reflow for transition
                                                                                                                                                                panel.getBoundingClientRect();
                                                                                                                                                                    panel.style.maxHeight = '0';
                                                                                                                                                                        panel.classList.remove('open');
                                                                                                                                                                          }

                                                                                                                                                                            // Smooth scroll for anchor links
                                                                                                                                                                              document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
                                                                                                                                                                                  anchor.addEventListener('click', function(e){
                                                                                                                                                                                        e.preventDefault();
                                                                                                                                                                                              const target = document.querySelector(this.getAttribute('href'));
                                                                                                                                                                                                    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
                                                                                                                                                                                                        });
                                                                                                                                                                                                          });
                                                                                                                                                                                                          });