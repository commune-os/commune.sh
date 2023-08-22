<script>
import '/static/main.css'
import Logo from '$lib/logo/logo.svelte'

let hovered = false;
</script>

<svelte:head>
    <title>Commune</title>
    <meta name="description" content="Build free and open internet communities">
    <meta name="keywords" content="commune, matrix, chat, community, open
        source, free, open, source, chat, messaging, federated, decentralized,
        open, source, free, libre">
    <meta name="author" content="Commune">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Commune">
    <meta property="og:description" content="Build free and open internet communities">
    <meta property="og:image" content="https://static.commune.sh/logo.png">
    <meta property="og:url" content="https://commune.sh">

</svelte:head>

<div class="root">
    <nav class="nav ">
        <a class="lnk fl" href="/" 
            on:mouseleave={() => hovered = false}
            on:mouseover={() => hovered = true}>
            <Logo hovered={hovered} />
            <div class="name ml3 grd-c">
                <a href="/">Commune</a>
            </div>
        </a>
        <div class="fl-o">
        </div>
        <div class="">
            <ul class="nav-links">
                <li class="nav-link">
                    <a href="https://github.com/commune-os/commune-server"
                        target="_blank">Code</a>
                </li>
            </ul>
        </div>
    </nav>

    <section class="content">
        <slot></slot>
    </section>

    <section class="footer">
    </section>
</div>

<style>
.root {
    padding: 1.5rem;
}

.nav {
    margin: 0 auto;
    display: flex;
    max-width: 1324px;
    width: 100%;
}
.name {
    margin-top: 2px;
    font-size: 1.6rem;
    font-weight: 700;
}
.nav-links {
    display: flex;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
}
.nav-link {
    margin: 0 0.5rem;
    display: grid;
}

.nav-link a {
    justify-self: center;
    align-self: center;
}

.nav-link a:link, a:visited {
    padding: 0.5rem;
    color: var(--text-1);
    text-decoration: none;
    border-radius: 7px;
    font-size: 1.1rem;
    background: var(--shade-3);
}

.nav-link a:link:hover, a:visited:hover {
    background: var(--shade-4);
}

.lnk a:link, a:visited {
    color: var(--text-1);
    text-decoration: none;
}

@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
    .root {
        padding: 1rem;
    }
    .name {
        font-size: 1.3rem;
    }
}

</style>

