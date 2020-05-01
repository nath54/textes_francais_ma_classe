#coding:utf-8
import io


def toall(cat):
    f=io.open("dic/"+cat+".txt","r",encoding="utf-8")
    data=f.read().split("\n")
    f.close()

    txt="const "+cat+"={"
    for d in data:
        dd=d.split(";")
        if d!='':
            txt+='\n    "'+dd[0]+'":['
            if len(dd)==2:
                txt+='"'+dd[1]+'"'
            elif len(dd)==3:
                txt+='"'+dd[1]+'","'+dd[2]+'"'
            elif len(dd)==4:
                txt+='"'+dd[1]+'","'+dd[2]+'","'+dd[3]+'"'
            txt+="],"
    txt=txt[:-1]+"\n};"

    f=io.open("../js/"+cat+".js","w",encoding="utf-8")
    f.write(txt)
    f.close()

for cat in ["adjectives","adverbs","conjunctions","determiners","nouns","prepositions","pronouns","verbs","dictionary"]:
    toall(cat)
