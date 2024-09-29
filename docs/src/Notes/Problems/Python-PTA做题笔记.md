# Python做题笔记

## 概念题：

实数不是python的数据类型。**实数是数学中的概念，在Python中对应浮点数。**

------

"去掉字符串两侧指定字符"对应功能是.**strip()**

"按照指定字符分割字符串为数组"对应功能是.**split()**

"替换字符串中特定字符"对应功能是.**replace()**

"连接两个字符串序列"对应功能是+操作符

> ------
>
> 十进制：一般表示
>
> 二进制：0b 或 0B 开头
>
> 八进制：0o 或 0O 开头
>
> 十六进制：0x 或 0X 开头
>
> 没有0E开头

------

**randint()、getrandbits()、randrange()都产生随机整数，random()产生0到1之间的随机小数。**

------

**模块内高耦合、模块间低耦合。**

def vfunc(*a, b) 是错误的定义：*a表示可变参数，可变参数只能放在函数参数的最后。



## 编程题：

```python
s = 'PYTHON'
print("{0:3}".format(s))

#输出
PYTHON
```

{0:3}表示输出的宽度是3，但如果字符串超过长度3，则以字符串长度显示。

###**str**

str()函数是python的内置函数，将参数转换成字符串类型

------

### 输出不换行

print()中增加 end=""参数表示输出后不增加换行，多个print()可以连续输出

------

### chr() 和 ord()

ord()函数返回单个字符的ascii值（0-255）

chr()函数输入一个整数（0-255）返回对应的ascii符号

------

### join()

`join()` 是字符串的一个方法，它可以将一个字符串列表（或其他可迭代对象）中的所有字符串按照指定的分隔符连接起来，并返回一个新的字符串。

```python
separator = ' '  # 定义分隔符为空格
string_list = ['hello', 'world', 'python']
new_string = separator.join(string_list)  # 使用join()方法连接字符串列表
print(new_string)  # 输出结果为 "hello world python"
```

在上面的例子中，`join()` 方法使用空格作为分隔符，将字符串列表 `string_list` 中的三个字符串连接起来，得到一个新的字符串 `'hello world python'`，然后通过 `print()` 函数输出到标准输出。

------

### 转换进制

```python
#pta IP地址转换
binary_ip = input()  # 输入32位二进制码表示的IP地址

# 将32位二进制码转换为四个十进制数
decimal_ip = []# 创建一个空列表 decimal_ip，用于存储四个十进制数。
for i in range(0, 32, 8):
    #使用循环从二进制码字符串中每次取出8位，即一个字节，进行转换。range(0, 32, 8) 表示从0开始，每次增加8，到32为止，循环4次，分别对应四个字节。
    decimal_ip.append(str(int(binary_ip[i:i+8], 2)))
#对于每个字节，使用 int() 函数将二进制字符串转换为整数，再使用 str() 函数将其转换为字符串类型。其中，int() 函数的第二个参数是指定进制，这里使用 2 表示二进制。
# 输出十进制格式的IP地址
print('.'.join(decimal_ip))
#使用 join() 方法将四个十进制数连接成一个字符串，中间使用.作为分隔符，然后通过 print() 函数输出结果到标准输出。

# 输入
11000000101010000000000100000001
# 输出
192.168.1.1
```

------

### strip()

`strip()`是Python字符串方法之一，用于去掉字符串首尾的空格和换行符。

具体来说，`strip()`方法会返回一个去掉了字符串首尾空格和换行符的新字符串，原字符串不会被修改。

使用方法很简单，只需要在字符串对象后面加上`.strip()`即可。

```python
# pta 删除字符串中的子串
s1 = input().strip()
s2 = input().strip()

result = s1.replace(s2, '')

print(result)
```

### 字典

```python
d.keys()	//返回所有的键信息
d.values()	//返回所有的值信息
k in d	//判断键是否在字典中
del d[k]	//删除字典中某一键值对
d.items()	//返回所有的键值对
d.get(k,<default>)	//键存在返回相应的值，否则返回默认值
d.pop(k,<default>)	//键存在返回相应的值,同时删除键值对，否则返回默认值
len(d)
d.popitem()	//随机从字典中取出一个键值对，以元组(key,value)形式返回
d.clear()	//删除所有键值对
```

### replace()

```python
replace(old, new, count)
```

- old，旧字符或字符串
- new，新字符或字符串
- count，最大替换数量，从起始位置开始计数，默认替换所有
- **注意**：replace函数替换字符串，不影响原字符串

### format

在数字千分位加","

```python
a, b = map(int, input().split())
# print(format(a+b, ','))
print("{:,}".format(a + b))
```

### 输入多个字符串

```python
inDict = dict()
outDict = dict()
for _ in range(int(input())):
    sid, st, ed = input().split()
    inDict[sid] = st
    outDict[sid] = ed
inList = sorted(inDict.items(), key = lambda x:x[1])
outList = sorted(outDict.items(), key = lambda x:x[1])
print("%s %s"%(inList[0][0], outList[-1][0]))
```

```python
sid, st, ed = map(str, input().split())
```



### sort lambda

```python
items.sort(key=lambda x: x[1], reverse=True)#降序
```

### reduce

`reduce` 是 Python 内置函数库 `functools` 中的一个函数。它将一个二元函数（接受两个参数的函数）连续应用于序列的元素，从而将序列简化为单一值。简而言之，它会遍历列表，将函数应用于前两个元素，然后将结果与下一个元素一起再应用函数，如此反复，直到遍历完整个列表。

```python
reduce(lambda x, y : x ^ y, nums)
```



### jieba库

#### 英文词频统计

```python
def getText():
    txt = open("hamlet.txt", "r").read()  # 打开读取文章
    txt = txt.lower()  # 将大写字母转为小写
    for ch in '!"#$%&()*+,-./:;<=>?@[\\]^_‘{|}~':
        txt = txt.replace(ch, " ")  # 将文本中特殊字符替换为空格
    return txt


hamletTxt = getText()
words = hamletTxt.split()
counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1
items = list(counts.items())
items.sort(key=lambda x: x[1], reverse=True)
for i in range(10):
    word, count = items[i]
    print("{0:<10}{1:>5}".format(word, count))
```



# turtle绘图模式

1.设置画布大小和背景颜色,若不设置默认参数（400, 300, None）

```python
turtle.screensize(canvwidth = None, canvheight = None, bg = None)
```

2.设置画布的大小和位置

```python
turtle.setup(width, height, startx = None, starty = None)
#(startx, starty)坐标是矩形窗口左上角顶点的位置，为空位于屏幕中心
```

3.画笔属性

```python
turtle.pensize()#画笔宽度
turtle.pencolor()#没有参数传入，返回当前画笔颜色，传入参数设置画笔颜色
turtle.speed(speed)#设置画笔移动速度，画笔绘制速度范围[0, 10]
```

4.画笔移动命令

```python
turtle.penup()#提起画笔
turtle.pendown()#放下画笔，开始默认状态


turtle.forward(distance)#向当前画笔方向移动distance像素长度
 
turtle.backward(distance) #向当前画笔相反方向移动distance像素长度
 
turtle.right(degree) #顺时针移动degree°
 
turtle.left(degree) #逆时针移动degree°
 
turtle.goto(x,y) #将画笔移动到坐标为x,y的位置
 
setx( ) #将当前x轴移动到指定位置
 
sety( ) #将当前y轴移动到指定位置
 
turtle.circle() #画圆，半径为正(负)，表示圆心在画笔的左边(右边)画圆
 
setheading(angle) #设置当前朝向为angle角度
 
home() #将画笔回到原点，并且将画笔指向右侧。注意：当笔放下时，会留下移动到痕迹。
 
dot(r,color) 
#绘制一个直径为size，颜色为 color 的圆点。
#若size未指定，则直径取pensize+4和2*pensize中的较大值。

```

5.画笔控制命令

```python
turtle.fillcolor(colorstring) #绘制图形的填充颜色
 
turtle.color(color1, color2) #同时设置pencolor=color1, fillcolor=color2
 
turtle.filling() #返回当前是否在填充状态
 
turtle.begin_fill() #准备开始填充图形
 
turtle.end_fill() #填充完成
 
turtle.hideturtle() #隐藏画笔的turtle形状
 
turtle.showturtle() #显示画笔的turtle形状

turtle.done() #用来停止画笔绘制，但绘图窗体不关闭
```

6.全局控制命令

```python
turtle.done() #使绘图窗口不会自动消失
 
turtle.clear() #清空turtle窗口，但是turtle的位置和状态不会改变
 
turtle.reset() #清空窗口，重置turtle状态为起始状态
 
turtle.undo() #撤销上一个turtle动作
 
turtle.isvisible() #返回当前turtle是否可见
 
stamp() #复制当前图形
 
turtle.write(s [,font=("font-name",font_size,"font_type")]) 
#写文本，s为文本内容，font是字体的参数，分别为字体名称，大小和类型；
```

# 题目

## 对字符串数值类型判断

```python
def isNum(x):
    try:
        y = eval(x)
        if type(y) == int or type(y) == float or type(y) == complex:
            return True
        else:
            return False
    except:
        return False

```

## **随机生成密码**

新建一个字符列表，这个列表中的内容从前到后依次包含小写字母、大写字母、数字。 形如`['a',...,'z','A',...,'Z','0',...'9']`
**建议：**使用代码生成该字符列表。

分别输入随机数的种子`x`(整型)，随机生成的密码个数n，每个密码长度m。
每个密码包含的m个字符是从上述字符列表中**随机抽取** 。
**注意：**本题不要用`sample`函数，否则答案错误。

输入格式:

种子x (注意：需将x转换为整数型再进行设置)
密码个数n
每个密码的长度m

输出格式:

n行密码、每行m位。



`string.ascii_letters` 是 `string` 模块中的一个常量，它包含了所有的大小写字母（即英文字母）组成的字符串。

`string.ascii_letters` 的取值为 `'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'`，其中前半部分是小写字母（a-z），后半部分是大写字母（A-Z）。

```python
import string

lower_upper_letters = string.ascii_letters[26:] + string.ascii_letters[:26]
```

`string.ascii_letters[26:]` 表示从索引位置 26（小写字母 'a'）开始的子字符串，`string.ascii_letters[:26]` 表示从索引位置 0 到 25（大写字母 'Z'）的子字符串。通过将这两个子字符串连接起来，您就可以得到一个后半部分是小写字母，前半部分是大写字母的字符串 `lower_upper_letters`。

```python
import random
import string
x = int(input())
random.seed(x)
n = int(input())
m = int(input())
s = list(string.ascii_letters + string.digits)
for i in range(n):
    for j in range(m):
        print(random.choice(s), end = "")
    if i < n - 1:
        print()
```

## 字符串异常处理

```python
str = input()
try:
    n = int(input())
    print(str[n])
except ValueError:
    print("下标要整数")
except IndexError:
    print("下标越界")
```

##  **海伦公式求三角形面积的函数**

利用函数功能，判断输入的三个数是否能构成三角形。其中‪‬‪‬‪‬‪‬‪‬‮‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‭‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬

函数实现：判断三个参数是否大于0、并能构成三角形，如果是，则利用海伦公式求三角形面积（保留两个小数位），并回传主程序；否则回传0.00。‪‬‪‬‪‬‪‬‪‬‮‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‭‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬

主程序实现：输入三个值（输入异常时，输出0.00），调用函数并输出结果。‪‬‪‬‪‬‪‬‪‬‮‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‮‬‪‬‪‬‪‬‪‬‪‬‮‬‪‬‭‬‪‬‪‬‪‬‪‬‪‬‮‬‭‬‪‬‪‬‪‬‪‬‪‬‪‬‮‬‫‬‮‬

```python
import math
def fac(a, b, c):
    L = (a + b + c) / 2.0
    s = math.sqrt(L * (L - a) * (L - b) * (L - c))
    return s
try:
    a, b, c = map(float, input().split(','))
    if a > 0 and b > 0 and c > 0 and (a + b) > c and (b + c) > a and (a + c) > b: 
        print("%.2f"%fac(a, b, c))
    else:
        print("0.00")
except ValueError:
    print("0.00")
```

##  **列表的基本操作__[6-1]**

将随机输入的两组数据保存到两个列表变量x和y中，然后完成以下操作：

1. 按输入顺序输出两个列表的拼接结果
2. 输出列表 x 重复3次的结果
3. 输出列表 y 中第3个元素和最后一个元素
4. 输出列表 y 中序号1至4之间的元素(默认有5个以上的元素）
5. 输出列表x 、y的长度，结果用逗号分隔
6. 输出列表 x 的中元素的最小值和 y 中元素的最大值

输入样例:

在这里给出一组输入。例如：

```in
123
abcdef
```

输出样例:

在这里给出相应的输出。例如：

```out
['1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f']
['1', '2', '3', '1', '2', '3', '1', '2', '3']
c f
['b', 'c', 'd']
3,6
1 f
```

`enumerate(matrix)` 是一个内置函数 `enumerate()` 的使用，它将一个可迭代对象（例如列表、元组、字符串等）作为参数，并返回一个迭代器，该迭代器生成由索引和对应元素组成的元组。

```python
ans2 = x * 3
print("[", end="")
for idx, i in enumerate(ans2):
    print("'%s'"%i, end="")
    if idx != len(ans2) - 1:
        print(", ", end="")
print("]")
# 输出：
['1', '2', '3', '1', '2', '3', '1', '2', '3']
```

`map(str, ans5)` 的作用是将列表 `ans5` 中的每个元素都转换为字符串类型。

在这个上下文中，`ans5` 是一个长度为2的元组，包含了列表 `x` 和 `y` 的长度。通过 `map(str, ans5)`，我们将 `ans5` 中的每个元素都应用了 `str` 函数，将其转换为字符串类型。

这是因为 `join()` 函数要求参数为字符串类型的可迭代对象。所以，通过 `map(str, ans5)` 可以确保列表中的元素都被转换为字符串，以便使用 `join()` 函数将它们连接起来。

```python
ans5 = len(x), len(y)
print(','.join(map(str, ans5)))

# 输出：
3,6
```

##  **随机矩阵操作1__[6-1]**

```python
import random
random.seed(10)
A = [[random.randint(20, 50) for _ in range(3)] for _ in range(3)]
print("随机矩阵A为：")
# for s in A:
    # print(' '.join(map(str, s)))
for i in range(3):
    for j in range(3):
        print("%d "%A[i][j], end = "")
    print()
print("主对角线元素之和为：%d。"%(A[0][0] + A[1][1] + A[2][2]))
```

##  **随机矩阵操作2__[6-1]**

表示int最大值

```python
import sys
print("最大整数为：", sys.maxsize)
```

表示float最大值最大[浮点型](https://so.csdn.net/so/search?q=浮点型&spm=1001.2101.3001.7020)：

```python
float('inf')
```

最小浮点型：

```python
float('-inf')
```

## 字典建立与输出

分别以'a','b','c','d','e','f'为键，以[20，80]中随机数为值建立字典，其中，随机数种子为10，并按值升序输出，如示例所示。

输出样例:

在这里给出相应的输出。例如：

```out
[('f', 20), ('b', 22), ('c', 47), ('d', 50), ('a', 56), ('e', 56)]
```

```python
import random
random.seed(10)
# 生成随机字典
dict = {x:random.randint(20, 80) for x in "abcdef"}
ans = sorted(dict.items(), key = lambda x : x[1])
print(ans)
```

```python
z=zip(d.values(),d.keys())   
#[(62, 'a'), (97, 'b'), (87, 'c'), (68, 'd'), (91, 'e'), (76, 'f'), (88, 'g')],然后对这个列表进行sorted排序
sorted(z)


import random
random.seed(10)
keys = ['a', 'b', 'c', 'd', 'e', 'f']
values = [random.randint(20, 80) for _ in range(len(keys))]
dictionary = dict(zip(keys, values))
sorted_dict = sorted(dictionary.items(), key=lambda x: x[1])

print(sorted_dict)

```

## 合并字典并输出

由键盘输入建立两个字典，然后将这两个字典按键合并，并将合并的字典按键值降序输出，如示例所示。

输入样例1:

在这里给出一组输入。例如：

```in
{'a':1,'b':2,'c':3}
{'c':4,'d':5}
```

输出样例1:

在这里给出相应的输出。例如：

```out
[('d', 5), ('c', 7), ('b', 2), ('a', 1)]
```

```python
a = dict(eval(input()))
b = dict(eval(input()))
for x in b:
    if x not in a:
        a[x] = b[x]
    else:
        a[x] += b[x]
ans = sorted(a.items(), key = lambda x : x[0], reverse = True)
print(ans)
```

## **函数判断素数__5-1**

编写函数Prime()，参数为正整数，如果参数是素数，返回True，否则返回False。再编写调用该函数的主程序，实现判断输入整数是不是素数。

注：不考虑输入数据错误。

```python
import math
def Prime(n):
    if n <= 3:
        return n > 1
    if n % 6 != 1 and n % 6 != 5:
        return False
    for i in range(5, int(math.sqrt(n)), 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False
    return True
n = int(input())
if Prime(n):
    print("True")
else:
    print("False")
```

