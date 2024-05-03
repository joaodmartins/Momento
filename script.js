let containers = document.querySelectorAll(".wrapper-teams, .wrapper");

containers.forEach(container => {
    let innerContainers = container.querySelectorAll(".carrousel-teams, .carrousel");

    innerContainers.forEach(innerContainer => {
        let pressed = false;
        let startX;
        let x;

        container.addEventListener("mousedown", (e) => {
            pressed = true;
            startX = e.offsetX - innerContainer.offsetLeft;
            container.style.cursor = "grabbing";
        });

        container.addEventListener("mouseenter", () => {
            container.style.cursor = "grab";
        });

        container.addEventListener("mouseup", () => {
            container.style.cursor = "grab";
            pressed = false;
        });

        container.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();

            x = e.offsetX;
            innerContainer.style.left = `${x - startX}px`;
        });

        let boundItems = () => {
            let outer = container.getBoundingClientRect();
            let inner = innerContainer.getBoundingClientRect();

            if (parseInt(innerContainer.style.left) > 0) {
                innerContainer.style.left = "0px";
            }

            if (inner.right < outer.right) {
                innerContainer.style.left = `-${inner.width - outer.width}px`;
            }
        };

        container.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();

            x = e.offsetX;
            innerContainer.style.left = `${x - startX}px`;
            boundItems();
        });
    });
});