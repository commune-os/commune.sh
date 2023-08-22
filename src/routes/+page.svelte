<section class="copy">
    <div class="c grd-c fl-co">
        <div class="biggus">
            Free and Open <br> communities
        </div>
        <div class="smallus ph3">
            Create Matrix-powered communities that are publicly accessible
            and federated.
        </div>
        <div class="grd-c mt5 mh3">
            <a class="" href="https://app.commune.sh" >
                <button class="open">Open Commune</button>
            </a>
        </div>
    </div>
</section>

<style>
.copy {
    height: calc(100vh - 8rem);
    display: grid;
    justify-self: center;
    align-self: center;
}

.open {
    cursor: pointer;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 500px;
    font-size: 1.4rem;
}

.biggus {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    display: grid;
    justify-self: center;
    align-self: center;
    line-height: 1;
}

.smallus {
    margin-top: 2rem;
    max-width: 700px;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
    display: grid;
    justify-self: center;
    align-self: center;
    line-height: 1.4;
}

@media screen and (max-width: 1024px) {
    .biggus {
        font-size: 3rem;
    }
}
@media screen and (max-width: 768px) {
    .biggus {
        font-size: 2.6rem;
    }
    .smallus {
        max-width: 100%;
        font-size: 1.3rem;
    }
    .open {
        cursor: pointer;
        color: var(--text-1);
        padding: 0.6rem 1.4rem;
        border-radius: 500px;
        font-size: 1.4rem;
    }
}

</style>

