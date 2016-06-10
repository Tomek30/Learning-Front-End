/**
 * Created by x on 2016-05-18.
 */
$(document).ready
(
    function() {
        /*-----Example 1------*/
        
        $("#squareImg1").fadeTo(2000, 0.5).animate({left: "+=100px"}, "slow");
        

        
        /*-----Example 2------*/
        
        $("#squareImg2").mouseenter
        (
            function () {
                $("#squareImg2").fadeTo('slow', 0.5, 'swing');
            }
        );
        $("#squareImg2").mouseleave
        (
            function () {
                $("#squareImg2").fadeTo('slow', 1, 'swing');
            }
        );

        
        

        /*-----Example 3------*/
        
        var img4 = $("#squareImg3");
        var vertical = "44";
        var horizontal = 222;

        animateEx3();
        function animateEx3() {
            img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");
            img4.animate({top: "+=" + vertical + "px"}, "slow");
            img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");
            img4.animate({top: "-=" + vertical + "px"}, "slow");
            img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");
            img4.animate({top: "+=" + vertical + "px"}, "slow");
            img4.animate({left: "-=" + (horizontal * 3).toString() + "px"}, "slow");
            img4.animate({top: "-=" + vertical + "px"}, "slow", animateEx3);
        }

        /*

        img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");
        img4.queue
        (
            function () {
                img4.animate({top: "+=" + vertical + "px"}, "slow");
                this.dequeue();
            }
        );
        img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");


        //queueEx4();
        function queueEx4() {
            img4.queue("queEx4", function () {
                img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");
            }).queue("queEx4", function () {
                img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");

            })
        }

        img4.queue("queEx4", function () {
            img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");
        }).queue("queEx4", function () {
            img4.animate({left: "+=" + horizontal.toString() + "px"}, "slow");

        });


        $("#buttonEx4").click(function () {
            img4.stop();
        });

        */

        
        
        /*-----Example 4------*/
        
        var i = 0;
        $("#buttonEx4").click
        (
            function ()
            {
                i++;
                $("#buttonEx4").text("Div added");

                var toAdd = $("<p></p>").text("Added P" + i).attr("id", "id" + i);
                $("#divEx4").after(toAdd);
            }
        );

        $("#buttonEx4remove").click
        (
            function ()
            {
                $("#id" + i).remove();
                i--;
            }
        );

        
        
        
        /*-----Example 5------*/

        $("#buttonEx5").click
        (
            function ()
            {
                $("#pEx5").toggleClass("toggleCSS")
            }
        );


    }
);

