import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

enum SyntaxType {
    RESERVED_VARS = 'rv_vars',
    RESERVED_OBJ_PROPS = 'rv_props',
    RESERVED_OTHER = 'rv_other',
}

export interface Syntax {
    es6: string,
    ejs: string
}

interface SyntaxTokens {
    syntax: Syntax[];
    type: SyntaxType
}

@Injectable({
    providedIn: 'root'
})
export class EJSSyntax {
    public syntax: SyntaxTokens[] = [
        {
            syntax: [
                {
                    es6: 'console',
                    ejs: 'marta'
                },
                {
                    es6: 'log',
                    ejs: 'olea'
                },
                {
                    es6: 'abstract',
                    ejs: '@pelochungo'
                },
                {
                    es6: 'arguments',
                    ejs: '@xploding_kitty'
                },
                {
                    es6: 'await',
                    ejs: '@dannyel_'
                },
                {
                    es6: 'boolean',
                    ejs: '@Marinero_Marino'
                },
                {
                    es6: 'break',
                    ejs: 'cafeteria'
                },
                {
                    es6: 'byte',
                    ejs: '@JoCaMo'
                },
                {
                    es6: 'case',
                    ejs: '@AdriFdez_'
                },
                {
                    es6: 'catch',
                    ejs: '@vix_ferrer'
                },
                {
                    es6: 'char',
                    ejs: '@anthowm'
                },
                {
                    es6: 'class',
                    ejs: 'bloque_iii'
                },
                {
                    es6: 'const',
                    ejs: '@DiegoLg'
                },
                {
                    es6: 'continue',
                    ejs: '@CaravantesMario'
                },
                {
                    es6: 'debugged',
                    ejs: '@CheteGutierrez'
                },
                {
                    es6: 'default',
                    ejs: '@Ayarina_'
                },
                {
                    es6: 'delete',
                    ejs: '@nadiaisgaming'
                },
                {
                    es6: 'do',
                    ejs: '@alvaritojg'
                },
                {
                    es6: 'double',
                    ejs: '@javinator'
                },
                {
                    es6: 'else',
                    ejs: '@etsisi_amor'
                },
                {
                    es6: 'enum',
                    ejs: '@emili_cp'
                },
                {
                    es6: 'eval',
                    ejs: '@ItsNash'
                },
                {
                    es6: 'export',
                    ejs: '@totegsito'
                },
                {
                    es6: 'extends',
                    ejs: '@itsanaaland'
                },
                {
                    es6: 'false',
                    ejs: '@its_charlie'
                },
                {
                    es6: 'final',
                    ejs: '@MelchorAlvaro'
                },
                {
                    es6: 'finally',
                    ejs: '@sgc'
                },
                {
                    es6: 'float',
                    ejs: '@opleno'
                },
                {
                    es6: 'for',
                    ejs: '@zsahraoui'
                },
                {
                    es6: 'function',
                    ejs: '@KirtashYuuki'
                },
                {
                    es6: 'goto',
                    ejs: '@mimadrenococina'
                },
                {
                    es6: 'if',
                    ejs: '@etsisi_enfureci'
                },
                {
                    es6: 'implements',
                    ejs: '@moco__loco'
                },
                {
                    es6: 'import',
                    ejs: '@Daazarog'
                },
                {
                    es6: 'in',
                    ejs: '@gettsu'
                },
                {
                    es6: 'instanceof',
                    ejs: '@lr_blue'
                },
                {
                    es6: 'int',
                    ejs: 'LeGoyames'
                },
                {
                    es6: 'interface',
                    ejs: '@apsueiro'
                },
                {
                    es6: 'let',
                    ejs: '@Educesar'
                },
                {
                    es6: 'long',
                    ejs: '@Valentino_Mrtnz'
                },
                {
                    es6: 'native',
                    ejs: '@nopuedoconmivid'
                },
                {
                    es6: 'new',
                    ejs: '@Mani_paliedro'
                },
                {
                    es6: 'null',
                    ejs: '@RubenMoros'
                },
                {
                    es6: 'package',
                    ejs: '@zaakc_'
                },
                {
                    es6: 'private',
                    ejs: '@vmolinerog'
                },
                {
                    es6: 'protected',
                    ejs: '@akiradipper'
                },
                {
                    es6: 'public',
                    ejs: '@Mattymathius'
                },
                {
                    es6: 'return',
                    ejs: '@ardillartner'
                },
                {
                    es6: 'short',
                    ejs: '@pablom_'
                },
                {
                    es6: 'static',
                    ejs: '@alexxistyping'
                },
                {
                    es6: 'super',
                    ejs: '@piuland'
                },
                {
                    es6: 'switch',
                    ejs: '@anibalord'
                },
                {
                    es6: 'synchronized',
                    ejs: '@ZabeTV'
                },
                {
                    es6: 'this',
                    ejs: '@jota_sh'
                },
                {
                    es6: 'throw',
                    ejs: '@TidusRL'
                },
                {
                    es6: 'throws',
                    ejs: '@VinuYSeFuee'
                },
                {
                    es6: 'transient',
                    ejs: '@JaviSaavedra'
                },
                {
                    es6: 'true',
                    ejs: '@__lolo__'
                },
                {
                    es6: 'try',
                    ejs: '@_Bxcxn'
                },
                {
                    es6: 'typeof',
                    ejs: '@claradlatorre'
                },
                {
                    es6: 'var',
                    ejs: '@memirasytecalo'
                },
                {
                    es6: 'void',
                    ejs: '@bxrrxl___'
                },
                {
                    es6: 'volatile',
                    ejs: '@LuisOverflow'
                },
                {
                    es6: 'while',
                    ejs: '@kayakokolishi'
                },
                {
                    es6: 'with',
                    ejs: '@Salman_mnari'
                },
                {
                    es6: 'yield',
                    ejs: '@TheCaptainsExe'
                },],
            type: SyntaxType.RESERVED_VARS
        },
        {
            syntax: [
                {
                    es6: 'Array',
                    ejs: '@AlonsD'
                },
                {
                    es6: 'Date',
                    ejs: '@JorgeRayooo'
                },
                {
                    es6: 'eval',
                    ejs: '@JaimeRosillo'
                },
                {
                    es6: 'function',
                    ejs: '@AliciaX'
                },
                {
                    es6: 'hasOwnProperty',
                    ejs: '@goldenapril'
                },
                {
                    es6: 'Infinity',
                    ejs: '@martaoleac'
                },
                {
                    es6: 'isFinite',
                    ejs: '@mbollain'
                },
                {
                    es6: 'isNaN',
                    ejs: '@CoreDumpedUPM'
                },
                {
                    es6: 'isPrototypeOf',
                    ejs: '@NostromoUPM'
                },
                {
                    es6: 'length',
                    ejs: '@PowerUp_UPM'
                },
                {
                    es6: 'Math',
                    ejs: 'Miñano'
                },
                {
                    es6: 'NaN',
                    ejs: '@Robocov'
                },
                {
                    es6: 'name',
                    ejs: '@ETSISIupm'
                },
                {
                    es6: 'Number',
                    ejs: 'cic'
                },
                {
                    es6: 'Object',
                    ejs: 'Calle_Alan_Turin'
                },
                {
                    es6: 'prototype',
                    ejs: 'CIC'
                },
                {
                    es6: 'String',
                    ejs: 'he_perdido'
                },
                {
                    es6: 'toString',
                    ejs: 'has_perdido'
                },
                {
                    es6: 'undefined',
                    ejs: 'the_game'
                },
                {
                    es6: 'valueOf',
                    ejs: 'pelochungo'
                },
            ],
            type: SyntaxType.RESERVED_OBJ_PROPS
        },
        {
            syntax: [{
                es6: 'alert',
                ejs: 'xploding_kitty'
            },
            {
                es6: 'all',
                ejs: 'dannyel_'
            },
            {
                es6: 'assign',
                ejs: 'Marinero_Marino'
            },
            {
                es6: 'blur',
                ejs: 'JoCaMo'
            },
            {
                es6: 'button',
                ejs: 'AdriFdez_'
            },
            {
                es6: 'checkbox',
                ejs: 'vix_ferrer'
            },
            {
                es6: 'clearInterval',
                ejs: 'anthowm'
            },
            {
                es6: 'clearTimeout',
                ejs: 'DiegoLg'
            },
            {
                es6: 'clientInformation',
                ejs: 'CaravantesMario'
            },
            {
                es6: 'close',
                ejs: 'CheteGutierrez'
            },
            {
                es6: 'closed',
                ejs: 'Ayarina_'
            },
            {
                es6: 'confirm',
                ejs: 'nadiaisgaming'
            },
            {
                es6: 'constructor',
                ejs: 'alvaritojg'
            },
            {
                es6: 'crypto',
                ejs: 'javinator'
            },
            {
                es6: 'decodeURI',
                ejs: 'emili_cp'
            },
            {
                es6: 'decodeURIComponent',
                ejs: 'ItsNash'
            },
            {
                es6: 'defaultStatus',
                ejs: 'totegsito'
            },
            {
                es6: 'document',
                ejs: 'itsanaaland'
            },
            {
                es6: 'element',
                ejs: 'its_charlie'
            },
            {
                es6: 'elements',
                ejs: 'MelchorAlvaro'
            },
            {
                es6: 'embed',
                ejs: 'sgc'
            },
            {
                es6: 'embeds',
                ejs: 'opleno'
            },
            {
                es6: 'encodeURI',
                ejs: 'zsahraoui'
            },
            {
                es6: 'encodeURIComponent',
                ejs: 'KirtashYuuki'
            },
            {
                es6: 'escape',
                ejs: 'mimadrenococina'
            },
            {
                es6: 'event',
                ejs: 'moco__loco'
            },
            {
                es6: 'fileUpload',
                ejs: 'Daazarog'
            },
            {
                es6: 'focus',
                ejs: 'gettsu'
            },
            {
                es6: 'form',
                ejs: 'lr_blue'
            },
            {
                es6: 'forms',
                ejs: 'LeGoyames'
            },
            {
                es6: 'frame',
                ejs: 'apsueiro'
            },
            {
                es6: 'innerHeight',
                ejs: 'Educesar'
            },
            {
                es6: 'innerWidth',
                ejs: 'Valentino_Mrtnz'
            },
            {
                es6: 'location',
                ejs: 'nopuedoconmivid'
            },
            {
                es6: 'mimeTypes',
                ejs: 'Mani_paliedro'
            },
            {
                es6: 'navigate',
                ejs: 'RubenMoros'
            },
            {
                es6: 'navigator',
                ejs: 'zaakc_'
            },
            {
                es6: 'frames',
                ejs: 'vmolinerog'
            },
            {
                es6: 'frameRate',
                ejs: 'akiradipper'
            },
            {
                es6: 'hidden',
                ejs: 'Mattymathius'
            },
            {
                es6: 'history',
                ejs: 'ardillartner'
            },
            {
                es6: 'image',
                ejs: 'pablom_'
            },
            {
                es6: 'images',
                ejs: 'alexxistyping'
            },
            {
                es6: 'offscreenBuffering',
                ejs: 'piuland'
            },
            {
                es6: 'open',
                ejs: 'anibalord'
            },
            {
                es6: 'opener',
                ejs: 'ZabeTV'
            },
            {
                es6: 'option',
                ejs: 'jota_sh'
            },
            {
                es6: 'outerHeight',
                ejs: 'TidusRL'
            },
            {
                es6: 'outerWidth',
                ejs: 'VinuYSeFuee'
            },
            {
                es6: 'packages',
                ejs: 'JaviSaavedra'
            },
            {
                es6: 'pageXOffset',
                ejs: '__lolo__'
            },
            {
                es6: 'pageYOffset',
                ejs: '_Bxcxn'
            },
            {
                es6: 'parent',
                ejs: 'claradlatorre'
            },
            {
                es6: 'parseFloat',
                ejs: 'memirasytecalo'
            },
            {
                es6: 'parseInt',
                ejs: 'bxrrxl___'
            },
            {
                es6: 'password',
                ejs: 'LuisOverflow'
            },
            {
                es6: 'prompt',
                ejs: 'TheCaptainsExe'
            },
            {
                es6: 'radio',
                ejs: 'kayakokolishi'
            },
            {
                es6: 'reset',
                ejs: 'Salman_mnari'
            },
            {
                es6: 'screenX',
                ejs: 'AlonsD'
            },
            {
                es6: 'screenY',
                ejs: 'JorgeRayooo'
            },
            {
                es6: 'scroll',
                ejs: 'JaimeRosillo'
            },
            {
                es6: 'select',
                ejs: 'AliciaX'
            },
            {
                es6: 'self',
                ejs: 'oleAmarta'
            },
            {
                es6: 'setInterval',
                ejs: 'goldenapril'
            },
            {
                es6: 'setTimeout',
                ejs: 'martaoleac'
            },
            {
                es6: 'submit',
                ejs: 'mbollain'
            },
            {
                es6: 'textarea',
                ejs: 'CoreDumpedUPM'
            },
            {
                es6: 'top',
                ejs: 'NostromoUPM'
            },
            {
                es6: 'window',
                ejs: 'PowerUp_UPM'
            },
            ],
            type: SyntaxType.RESERVED_OTHER
        }
    ];

    private fireHighlight: Subject<boolean> = new Subject<boolean>();
    public fireHighlight$: Observable<boolean> = this.fireHighlight.asObservable();

    public setFirehighlight(status: boolean): void {
        this.fireHighlight.next(status);
    }

    private getTokenType(token: string): string {
        const tok = this.syntax.find(el => el.syntax.some(s => token.match(new RegExp(`^${s.ejs}$`))))
        if (tok) return tok.type;
        else return undefined
    }

    public tokenizeCode(code: string) {
        let highlighted;
        highlighted = code.replace(/([\s.(),+-?<>:;\[\]{}!%*\/])/g, '<span>$1</span>')
        highlighted = highlighted.replace(/"(.*?)"/g, "<span>\"$1\"</span>")
        const lines: string[] = highlighted.split('\n');
        const codeEl = document.createElement('code');
        Array.from(lines).forEach((line) => {
            const row = document.createElement('div');
            row.className = 'row'
            row.innerHTML = line;
            codeEl.append(row);
        });
        const rows = codeEl.querySelectorAll('.row');
        Array.from(rows).forEach(row => {
            const childs = row.childNodes;
            const reg = new RegExp(/(<span>(\s?|(\&nbsp;)?)<\/span>(\s?|(\&nbsp;)?)<span>(\s?|(\&nbsp;)?)<\/span>(\s?|(\&nbsp;)?)<span>(\s?|(\&nbsp;)?)<\/span>(\s?|(\&nbsp;)?))$/)
            while (reg.test(row.innerHTML))
                row.innerHTML = row.innerHTML.replace(reg, '')
            Array.from(childs).forEach(child => {
                if (child.nodeName === '#text') {
                    const span = document.createElement('span');
                    span.innerHTML = child.nodeValue;
                    row.insertBefore(span, child);
                    child.remove();
                } else {
                    (child as HTMLElement).innerHTML = (child as HTMLElement).innerText;
                    if ((child as HTMLElement).innerHTML.trim() === '') {
                        (child as HTMLElement).innerHTML = '&nbsp;'
                    }
                }
            });
            if ((row as HTMLElement).innerText === '') row.remove();
        });
        return codeEl;
    }

    public tokenizeTokens(tokens: HTMLElement) {
        const rows = tokens.querySelectorAll('.row');
        const codeEl = document.createElement('code');
        Array.from(rows).forEach((row, i) => {
            let spans = row.querySelectorAll('span');
            row.id = `row-${i}`;
            Array.from(spans).forEach((span, j) => {
                span.id = `row-${i}-token-${j}`;
                const tokenType = this.getTokenType(span.innerText);
                if (span.innerText.trim().startsWith('"')) span.className = 'rv_quote';
                else if (/\d/.test(span.innerText.trim())) span.className = 'rv_number'
                else if (j > 0 && spans[j - 1].innerText === '.') span.className = 'rv_property'
                else if (tokenType) span.className = tokenType;
            });
            spans = row.querySelectorAll('span')

            codeEl.append(row);
        });

        return codeEl;
    }

    public highlightCodeReplaceBy(code: string, replaceBy: { regExp: RegExp, token: string }, first?: boolean): string {
        return code.split(replaceBy.regExp).map(el => {
            if (first) return `<span class="syntax">${el}<\/span>`
            return el.replace(el, `<span>${el}<\/span>`)
        }).join(replaceBy.token)
    }

}

