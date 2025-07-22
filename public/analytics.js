// Analytics and Error Tracking for Hack The Future
(function() {
    'use strict';

    // Performance monitoring
    function trackPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const paintData = performance.getEntriesByType('paint');
                    
                    const metrics = {
                        pageLoadTime: perfData.loadEventEnd - perfData.loadEventStart,
                        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        firstPaint: paintData.find(entry => entry.name === 'first-paint')?.startTime || 0,
                        firstContentfulPaint: paintData.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
                    };

                    // Send to analytics (replace with your actual analytics service)
                    console.log('Performance Metrics:', metrics);
                    
                    // Track Core Web Vitals
                    if ('PerformanceObserver' in window) {
                        const observer = new PerformanceObserver((list) => {
                            for (const entry of list.getEntries()) {
                                if (entry.entryType === 'largest-contentful-paint') {
                                    console.log('LCP:', entry.startTime);
                                }
                                if (entry.entryType === 'first-input') {
                                    console.log('FID:', entry.processingStart - entry.startTime);
                                }
                            }
                        });
                        
                        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
                    }
                }, 0);
            });
        }
    }

    // Error tracking
    function trackErrors() {
        window.addEventListener('error', function(e) {
            const errorData = {
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno,
                stack: e.error?.stack,
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString()
            };
            
            console.error('Error tracked:', errorData);
            // Send to error tracking service
        });

        window.addEventListener('unhandledrejection', function(e) {
            const errorData = {
                message: e.reason?.message || 'Unhandled Promise Rejection',
                stack: e.reason?.stack,
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString()
            };
            
            console.error('Unhandled Promise Rejection:', errorData);
            // Send to error tracking service
        });
    }

    // User interaction tracking
    function trackInteractions() {
        const trackableElements = document.querySelectorAll('a, button, [role="button"]');
        
        trackableElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const interactionData = {
                    element: element.tagName.toLowerCase(),
                    text: element.textContent?.trim().substring(0, 50),
                    href: element.href || null,
                    className: element.className,
                    url: window.location.href,
                    timestamp: new Date().toISOString()
                };
                
                console.log('User Interaction:', interactionData);
                // Send to analytics service
            });
        });
    }

    // Form tracking
    function trackForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const formData = {
                    action: form.action,
                    method: form.method,
                    formId: form.id || form.className,
                    url: window.location.href,
                    timestamp: new Date().toISOString()
                };
                
                console.log('Form Submission:', formData);
                // Send to analytics service
            });
        });
    }

    // Initialize tracking when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            trackPerformance();
            trackErrors();
            trackInteractions();
            trackForms();
        });
    } else {
        trackPerformance();
        trackErrors();
        trackInteractions();
        trackForms();
    }

    // Expose tracking functions globally for manual tracking
    window.HackTheFutureAnalytics = {
        trackEvent: function(eventName, data) {
            const eventData = {
                event: eventName,
                data: data,
                url: window.location.href,
                timestamp: new Date().toISOString()
            };
            console.log('Custom Event:', eventData);
            // Send to analytics service
        },
        
        trackConversion: function(conversionType, value) {
            const conversionData = {
                type: conversionType,
                value: value,
                url: window.location.href,
                timestamp: new Date().toISOString()
            };
            console.log('Conversion:', conversionData);
            // Send to analytics service
        }
    };

})(); 