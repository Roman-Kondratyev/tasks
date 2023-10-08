

class HTML {
    bindOption() {
        const btn = document.querySelector("button");

        btn.addEventListener("click", () => {
            const inp = document.querySelector("input");
            try {
                if (!inp.value) throw new Error("error")

                const div = document.querySelector("div");

                div.innerHTML = inp.value;
                inp.value = " ";

            } catch (error) {
                inp.style = 'border: 10px solid red'
                alert(error.message)
            }

        })
    }
}

const html = new HTML();
html.bindOption()
