(function ($) {

    if ($('.accordian-grp').length) {
        var accordianGrp = $('.accordian-grp');
        accordianGrp.each(function () {
            var accordianName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accordian');
            Self.addClass(accordianName);
            Self.find('.accordian .accordian-content').hide();
            Self.find('.accordian.active').find('.accordian-content').show();
            accordion.each(function () {
                $(this).find('.accordian-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accordian-grp.' + accordianName).find('.accordian').removeClass('active');
                        $('.accordian-grp.' + accordianName).find('.accordian').find('.accordian-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accordian-content').slideDown();
                    };
                });
            });
        });

    };

    if ($('.contact-form-validated').length) {
        $('.contact-form-validated').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }

    if ($('.newsletter').length) {

        $('.newsletter').each(function () {
            var Self = $(this);
            var nlURL = Self.data('url');
            var nlresp = Self.parent().find('.newsletter__response');

            Self.ajaxChimp({
                url: nlURL,
                callback: function (resp) {
                    // appending response
                    nlresp.append(function () {
                        return '<p class="newsletter-message">' + resp.msg + '</p>';
                    })
                    // making things based on response
                    if (resp.result === 'success') {
                        // Do stuff
                        Self.removeClass('error').addClass('success');
                        nlresp.removeClass('error').addClass('success');
                        Self.find('input').val('');

                        nlresp.find('p').fadeOut(10000);

                    }
                    if (resp.result === 'error') {
                        Self.removeClass('success').addClass('error');
                        nlresp.removeClass('success').addClass('error');
                        Self.find('input').val('');

                        nlresp.find('p').fadeOut(10000);

                    }
                }
            });

        });
    }

    // eslint-disable-next-line no-undef
    })(jQuery);
